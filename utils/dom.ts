/**
 * Converts a pixel value to a REM value based on a dynamic root font size.
 * The root font size is calculated using the formula: (viewportWidth / 1512) * 10.
 *
 * @param pxValue The pixel value to convert.
 * @param viewportWidth The current viewport width in pixels. This is crucial for
 * calculating the dynamic REM base.
 * @returns The equivalent REM value.
 */
export function rem(
  pxValue: number,
  viewportWidth: number = innerWidth
): number {
  const rootFontSize = (1440 / viewportWidth) * 10;
  if (rootFontSize === 0) {
    console.warn(
      "Root font size calculated as 0. Returning 0rem to avoid division by zero."
    );
    return 0;
  }

  const remValue = (pxValue * 100) / rootFontSize;

  return remValue;
}
