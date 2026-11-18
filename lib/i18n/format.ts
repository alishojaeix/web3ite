/**
 * Persian display formatting.
 *
 * These helpers are presentation-only. Financial values, form payloads and API
 * requests keep their original Latin digits and numeric types; nothing here is
 * ever written back to the server.
 */

const PERSIAN_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"] as const;

const numberFormatter = new Intl.NumberFormat("fa-IR");

const persianDate = new Intl.DateTimeFormat("fa-IR", {
  calendar: "persian",
  dateStyle: "medium",
});

const persianDateTime = new Intl.DateTimeFormat("fa-IR", {
  calendar: "persian",
  dateStyle: "medium",
  timeStyle: "short",
});

/** Convert Latin digits (and Arabic-Indic digits) to Persian digits. */
export function toPersianDigits(value: string | number): string {
  return String(value)
    .replace(/[0-9]/g, (digit) => PERSIAN_DIGITS[Number(digit)])
    .replace(/[٠-٩]/g, (digit) =>
      PERSIAN_DIGITS[Number(digit.codePointAt(0)! - 0x0660)]
    );
}

/** Format a numeric display value with Persian grouping and digits. */
export function faNumber(
  value: number,
  options?: Intl.NumberFormatOptions
): string {
  if (!Number.isFinite(value)) return "—";
  return options
    ? new Intl.NumberFormat("fa-IR", options).format(value)
    : numberFormatter.format(value);
}

/**
 * USD catalogue prices, presented as "۲۴۹ دلار" for Persian readers.
 * The underlying `template.price` number is never changed.
 */
export function faCurrency(
  value: number,
  options?: { maximumFractionDigits?: number; withCurrency?: boolean }
): string {
  const maximumFractionDigits = options?.maximumFractionDigits ?? 0;
  const amount = new Intl.NumberFormat("fa-IR", {
    minimumFractionDigits: 0,
    maximumFractionDigits,
  }).format(value);
  if (options?.withCurrency === false) return amount;
  return `${amount} دلار`;
}

/** Gregorian input → Persian (Jalali) display date. */
export function faDate(value: Date | string | number): string {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return persianDate.format(date);
}

export function faDateTime(value: Date | string | number): string {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return persianDateTime.format(date);
}

/** "۱۲ قالب · ۶ صنعت" without duplicating the count rules. */
export function faCount(value: number, singular: string, plural?: string): string {
  return `${faNumber(value)} ${value === 1 ? singular : (plural ?? singular)}`;
}
