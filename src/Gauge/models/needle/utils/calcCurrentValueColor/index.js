import { colors } from '../../../../../colors';

export const calcCurrentValueColor = (value, ranges) => {
  // eslint-disable-next-line
  if (isNaN(value) || value === null) {
    throw Error('CalcVurrentValueColor MUST be passed a good value');
  }
  if (!ranges) {
    throw Error('CalcVurrentValueColor MUST be passed ranges');
  }
  let result = null;
  ranges.map((range) => {
    if (value >= range.lowerValue && value <= range.upperValue) {
      result = (colors[range.alertLevel] || colors.default);
    }
    return null;
  });
  return result;
};
