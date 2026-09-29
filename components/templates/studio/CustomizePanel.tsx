"use client";

const DEFAULT_ACCENTS = ["#7EE0FF", "#F0D9A8", "#FF5A36", "#C8F27A", "#C4B5FD"];

export function CustomizePanel({
  accent,
  onAccentChange,
  spin,
  onSpinChange,
  model,
}: {
  accent: string;
  onAccentChange: (accent: string) => void;
  spin: boolean;
  onSpinChange: (spin: boolean) => void;
  model: string;
}) {
  const accents = [accent, ...DEFAULT_ACCENTS.filter((c) => c !== accent)];

  return (
    <div className="mt-8 space-y-6">
      <div>
        <p className="text-[12px] uppercase tracking-[0.14em] text-[#8a847c]">Accent</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {accents.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => onAccentChange(color)}
              aria-label={`Accent ${color}`}
              className={`h-9 w-9 rounded-full border ${
                accent === color ? "border-white" : "border-white/20"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
      <label className="flex items-center justify-between text-[14px] text-[#c4bfb6]">
        Auto rotate
        <input
          type="checkbox"
          checked={spin}
          onChange={(e) => onSpinChange(e.target.checked)}
          className="h-4 w-4 accent-[#d4af7a]"
        />
      </label>
      <p className="text-[13px] text-[#8a847c]">
        Model path: {model}. Drop a GLB there to replace the sculpture.
      </p>
    </div>
  );
}
