import {
  createHmac,
  randomBytes,
  scrypt as scryptCallback,
  timingSafeEqual,
} from "node:crypto";
import { promisify } from "node:util";
import { cookies } from "next/headers";
import { appendToCollection, readCollection } from "./store";

const scrypt = promisify(scryptCallback) as (
  password: string,
  salt: string,
  keylen: number
) => Promise<Buffer>;

export const SESSION_COOKIE = "w3_session";
const SESSION_DAYS = 30;

export type UserRecord = {
  id: string;
  email: string;
  passwordHash: string;
  createdAt: string;
};

export type SessionUser = Pick<UserRecord, "id" | "email" | "createdAt">;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Used to keep login timing similar when the email does not exist. This is a
 * valid scrypt record for a throwaway password, never a real account.
 */
export const DUMMY_PASSWORD_HASH =
  "scrypt:00000000000000000000000000000000:a79be277f4164331643603688348e47bf86ce3900a63b8bc1a837c090f25b555cda39a106f0a1b8766ca7678fda8c3615c23c3b3b0c6b71e24b5628cb8f99a07";

export function normalizeEmail(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const email = value.trim().toLowerCase();
  if (email.length > 180 || !EMAIL.test(email)) return null;
  return email;
}

export function validatePassword(value: unknown): string | null {
  if (typeof value !== "string") return null;
  if (value.length < 8 || value.length > 200) return null;
  return value;
}

/**
 * A real secret is required in production. Development falls back to a fixed
 * local secret so the MVP can be exercised without credentials.
 */
function sessionSecret(): string | null {
  const configured = process.env.AUTH_SECRET;
  if (configured && configured.length >= 32) return configured;
  if (process.env.NODE_ENV !== "production") {
    return "web3ite-local-development-secret-do-not-deploy";
  }
  return null;
}

export function authAvailable(): boolean {
  return sessionSecret() !== null;
}

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString("hex");
  const derived = await scrypt(password, salt, 64);
  return `scrypt:${salt}:${derived.toString("hex")}`;
}

export async function verifyPassword(
  password: string,
  stored: string
): Promise<boolean> {
  const [scheme, salt, digest] = stored.split(":");
  if (scheme !== "scrypt" || !salt || !digest) return false;
  const expected = Buffer.from(digest, "hex");
  if (expected.length !== 64) return false;
  const derived = await scrypt(password, salt, 64);
  return timingSafeEqual(expected, derived);
}

export function createSessionToken(userId: string): string | null {
  const secret = sessionSecret();
  if (!secret) return null;
  const payload = Buffer.from(
    JSON.stringify({
      sub: userId,
      exp: Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000,
    })
  ).toString("base64url");
  const signature = createHmac("sha256", secret).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

export function verifySessionToken(token: string): string | null {
  const secret = sessionSecret();
  if (!secret) return null;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;

  const expected = createHmac("sha256", secret).update(payload).digest("base64url");
  const providedBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (providedBuffer.length !== expectedBuffer.length) return null;
  if (!timingSafeEqual(providedBuffer, expectedBuffer)) return null;

  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as {
      sub?: unknown;
      exp?: unknown;
    };
    if (typeof parsed.sub !== "string" || typeof parsed.exp !== "number") return null;
    if (parsed.exp < Date.now()) return null;
    return parsed.sub;
  } catch {
    return null;
  }
}

export function sessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_DAYS * 24 * 60 * 60,
  };
}

export function publicUser(user: UserRecord): SessionUser {
  return { id: user.id, email: user.email, createdAt: user.createdAt };
}

export async function findUserByEmail(email: string): Promise<UserRecord | null> {
  const users = await readCollection<UserRecord>("users");
  return users.find((user) => user.email === email) ?? null;
}

export async function findUserById(id: string): Promise<UserRecord | null> {
  const users = await readCollection<UserRecord>("users");
  return users.find((user) => user.id === id) ?? null;
}

export async function createUser(
  email: string,
  passwordHash: string
): Promise<UserRecord> {
  const user: UserRecord = {
    id: globalThis.crypto.randomUUID(),
    email,
    passwordHash,
    createdAt: new Date().toISOString(),
  };
  await appendToCollection<UserRecord>("users", user);
  return user;
}

/** Reads the signed session cookie and resolves it to a current user. */
export async function getSessionUser(): Promise<SessionUser | null> {
  const token = cookies().get(SESSION_COOKIE)?.value;
  if (!token) return null;
  const userId = verifySessionToken(token);
  if (!userId) return null;
  const user = await findUserById(userId);
  return user ? publicUser(user) : null;
}

/** Sanitise a post-auth redirect so it cannot leave this origin. */
export function safeNext(value: string | null | undefined, fallback = "/account"): string {
  if (!value || !value.startsWith("/") || value.startsWith("//")) return fallback;
  if (value.includes("\\") || /[\u0000-\u001f]/.test(value)) return fallback;
  if (value.startsWith("/api/")) return fallback;
  return value;
}
