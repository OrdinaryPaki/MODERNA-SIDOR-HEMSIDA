/** Progress while a media frame travels from below to above the viewport. */
export function getMediaScrollProgress(top: number, height: number, viewportHeight: number) {
  return Math.max(0, Math.min(1, (viewportHeight - top) / Math.max(1, viewportHeight + height)));
}
