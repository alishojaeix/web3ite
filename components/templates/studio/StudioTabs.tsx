"use client";

export type StudioView = "preview" | "customize";

export function StudioTabs({
  view,
  onChange,
}: {
  view: StudioView;
  onChange: (view: StudioView) => void;
}) {
  return (
    <div className="flex gap-2">
      {(["preview", "customize"] as const).map((id) => (
        <button
          key={id}
          type="button"
          onClick={() => onChange(id)}
          className={`rounded-sm px-4 py-2 text-[12px] uppercase tracking-[0.14em] ${
            view === id
              ? "bg-[#f4efe6] text-[#111]"
              : "border border-white/10 text-[#9a958c] hover:text-[#e8e4dc]"
          }`}
        >
          {id === "preview" ? "Preview" : "Customize"}
        </button>
      ))}
    </div>
  );
}
