export function PhotoPlaceholder({
  className = "",
  label,
}: {
  className?: string;
  label: string;
}) {
  return (
    <div
      className={`relative flex items-end overflow-hidden bg-gradient-to-br from-grey-dark to-grey-deep ${className}`}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--stone-light) 0 1px, transparent 1px 26px)",
        }}
      />
      <span className="relative z-10 m-4 rounded-full border border-stone/60 px-3 py-1 text-xs text-grey-light">
        Ganti dengan foto: {label}
      </span>
    </div>
  );
}