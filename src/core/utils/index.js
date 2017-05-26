import tinycolor from 'tinycolor2';

export function generateRandomPalette() {
  const color1 = tinycolor.random();
  const color2 = tinycolor.random();

  const palette = [
    color1.toHexString(),
    tinycolor.mix(color1, color2, 25).toHexString(),
    tinycolor.mix(color1, color2, 50).toHexString(),
    tinycolor.mix(color1, color2, 75).toHexString(),
    color2.toHexString(),
  ]
  return palette;
}