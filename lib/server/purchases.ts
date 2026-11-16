import { appendToCollection, readCollection } from "./store";

export type PurchaseRecord = {
  id: string;
  userId: string;
  templateId: string;
  /** Amount in the currency's minor unit (cents for USD). */
  amount: number;
  currency: string;
  status: "paid";
  stripeSessionId: string;
  createdAt: string;
};

export async function listPurchasesForUser(userId: string): Promise<PurchaseRecord[]> {
  const purchases = await readCollection<PurchaseRecord>("purchases");
  return purchases
    .filter((purchase) => purchase.userId === userId)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function hasPurchased(userId: string, templateId: string): Promise<boolean> {
  const purchases = await listPurchasesForUser(userId);
  return purchases.some((purchase) => purchase.templateId === templateId);
}

/**
 * Store a verified Stripe payment. Idempotent by session id, so both the
 * success page and the webhook may call it for the same checkout.
 */
export async function recordPurchase(input: {
  userId: string;
  templateId: string;
  amount: number;
  currency: string;
  stripeSessionId: string;
}): Promise<{ purchase: PurchaseRecord; created: boolean }> {
  const existing = await readCollection<PurchaseRecord>("purchases");
  const duplicate = existing.find(
    (purchase) => purchase.stripeSessionId === input.stripeSessionId
  );
  if (duplicate) return { purchase: duplicate, created: false };

  const purchase: PurchaseRecord = {
    id: globalThis.crypto.randomUUID(),
    userId: input.userId,
    templateId: input.templateId,
    amount: Math.max(0, Math.round(input.amount)),
    currency: input.currency.toLowerCase(),
    status: "paid",
    stripeSessionId: input.stripeSessionId,
    createdAt: new Date().toISOString(),
  };

  await appendToCollection<PurchaseRecord>("purchases", purchase);
  return { purchase, created: true };
}

export function formatPurchaseAmount(amount: number, currency: string): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
    maximumFractionDigits: 2,
  }).format(amount / 100);
}
