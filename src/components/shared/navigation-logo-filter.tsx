/** Remove the white canvas while preserving the logo's black and blue ink. */
export function NavigationLogoFilter() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
      <defs>
        <filter id="navigation-logo-ink" colorInterpolationFilters="sRGB">
          {/* Remove near-white texture too; both ink colors have little red. */}
          <feColorMatrix type="matrix" values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            -1.2 0 0 0 1.15
          " />
        </filter>
      </defs>
    </svg>
  );
}

/** Render flat white and brand blue while removing the white canvas and cross. */
export function FooterLogoFilter() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
      <defs>
        <filter id="footer-logo-ink" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="
            0 0 0 0 0
            0 0 0 0 0
            -20 0 20 0 0
            -1.2 0 0 0 1.15
          " />
          {/* Include pale blue edge pixels so antialiasing never turns into a white outline. */}
          <feComponentTransfer>
            <feFuncB type="discrete" tableValues="0 1" />
          </feComponentTransfer>
          {/* Blue ink becomes #003cff; neutral ink becomes white. Preserve alpha. */}
          <feColorMatrix type="matrix" values="
            0 0 -1 0 1
            0 0 -0.7647058823529411 0 1
            0 0 0 0 1
            0 0 0 1 0
          " />
        </filter>
      </defs>
    </svg>
  );
}
