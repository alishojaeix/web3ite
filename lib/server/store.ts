import { promises as fs } from "node:fs";
import path from "node:path";

/**
 * Dependency-free JSON persistence for the demo backend.
 *
 * Writes are local to the deployment filesystem. That is intentional for the
 * MVP, but serverless filesystems are read-only — callers must treat a write
 * failure as a real failure and tell the visitor, never as a silent success.
 */
const RUNTIME_DIR = process.env.WEB3ITE_DATA_DIR
  ? path.resolve(process.env.WEB3ITE_DATA_DIR)
  : path.join(process.cwd(), "data", "runtime");

export async function readCollection<T>(name: string): Promise<T[]> {
  try {
    const raw = await fs.readFile(path.join(RUNTIME_DIR, `${name}.json`), "utf8");
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as T[]) : [];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    if (error instanceof SyntaxError) return [];
    throw error;
  }
}

export async function appendToCollection<T>(name: string, record: T): Promise<void> {
  await fs.mkdir(RUNTIME_DIR, { recursive: true });
  const current = await readCollection<T>(name);
  current.push(record);
  const target = path.join(RUNTIME_DIR, `${name}.json`);
  const temporary = `${target}.${process.pid}.${Date.now()}.tmp`;
  await fs.writeFile(temporary, JSON.stringify(current, null, 2), "utf8");
  await fs.rename(temporary, target);
}

export async function writeCollection<T>(name: string, records: T[]): Promise<void> {
  await fs.mkdir(RUNTIME_DIR, { recursive: true });
  const target = path.join(RUNTIME_DIR, `${name}.json`);
  const temporary = `${target}.${process.pid}.${Date.now()}.tmp`;
  await fs.writeFile(temporary, JSON.stringify(records, null, 2), "utf8");
  await fs.rename(temporary, target);
}

export async function updateCollection<T>(
  name: string,
  update: (records: T[]) => T[]
): Promise<T[]> {
  const current = await readCollection<T>(name);
  const next = update(current);
  await writeCollection(name, next);
  return next;
}
