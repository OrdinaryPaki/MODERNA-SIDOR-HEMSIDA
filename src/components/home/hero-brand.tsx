import s from "./hero-variants.module.css";

const flagViewBox = "0 0 328 104";
function getFlagPath(crossWeight: "standard" | "light" = "standard") {
  const crossWidth = crossWeight === "light" ? 20 : 24;
  const crossHeight = crossWeight === "light" ? 16 : 20;
  const left = 86 - crossWidth / 2;
  const right = 86 + crossWidth / 2;
  const top = 52 - crossHeight / 2;
  const bottom = 52 + crossHeight / 2;
  return `M0 0h${left}v${top}H0zM${right} 0h${328 - right}v${top}H${right}zM0 ${bottom}h${left}v${104 - bottom}H0zM${right} ${bottom}h${328 - right}v${104 - bottom}H${right}z`;
}
const flagPath = getFlagPath();
export const flagMaskImage = `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${flagViewBox}"><path fill="white" d="${flagPath}"/></svg>`)}")`;

export function BrandFlag({ className, swedish = false, dark = false, crossWeight = "standard", stretch = false }: { className?: string; swedish?: boolean; dark?: boolean; crossWeight?: "standard" | "light"; stretch?: boolean }) {
  return (
    <svg className={className} viewBox={flagViewBox} preserveAspectRatio={stretch ? "none" : "xMidYMid meet"} role="img" aria-label={swedish ? "Sveriges blågula flagga" : "Moderna Sidors flaggsymbol"}>
      {swedish && <rect width="328" height="104" fill={dark ? "#D8AD00" : "#FECC00"} />}
      <path fill={swedish ? (dark ? "#004F7C" : "#006AA7") : "currentColor"} d={getFlagPath(crossWeight)} />
    </svg>
  );
}

export function BrandNameRow({ row, className }: { row: "moderna" | "sidor"; className: string }) {
  const top = row === "moderna";
  const width = top ? 858 : 508;
  const height = top ? 119 : 112;
  return (
    <svg viewBox={`-3 -3 ${width + 6} ${height + 6}`} className={className} role="img" aria-label={top ? "MODERNA" : "SIDOR"}>
      <text x="0" y={height} fontSize={top ? 164 : 154} textLength={width} lengthAdjust="spacingAndGlyphs" className={s.logoText}>{top ? "MODERNA" : "SIDOR"}</text>
    </svg>
  );
}
