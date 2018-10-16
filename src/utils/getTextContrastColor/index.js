// @flow

export const getTextContrastColor = (bgHexColor: string) => {
  if (typeof bgHexColor !== 'string') {
    throw new TypeError('COLOR MUST BE STRING IN HEX');
  }

  const r = parseInt(bgHexColor.substr(1, 2), 16);
  const g = parseInt(bgHexColor.substr(3, 2), 16);
  const b = parseInt(bgHexColor.substr(5, 2), 16);
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? 'black' : 'white';
};
