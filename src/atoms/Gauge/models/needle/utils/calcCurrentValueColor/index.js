import { colors } from '../../../../../../_depreciated/colors';

export const calcCurrentValueColor = (value, ranges) => {
  if (!ranges) {
    console.error('Should Have Ranges');
    return null;
  }
  let result = null;
  ranges.map((range) => {
    if (value > range.lowerValue && value <= range.upperValue) {
      result = (colors[range.alertLevel] || colors.default);
    }
    return null;
  });
  return result;
};
