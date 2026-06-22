export default function LogoWordmark({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const color = tone === "light" ? "#F0F5F9" : "#1F1F1F";

  return (
    <span
      aria-label="Moderna Sidor"
      className={`inline-flex items-center font-[family-name:var(--font-switzer)] text-[22px] font-medium leading-none tracking-[-0.08em] ${className}`}
      style={{ color }}
    >
      MS
    </span>
  );
}
