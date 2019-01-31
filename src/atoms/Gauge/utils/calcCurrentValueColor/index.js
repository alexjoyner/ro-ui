import { colors } from '../../../../_depreciated/colors';

export const calcCurrentValueColor = (value, ranges) => {
  let result = null;
  ranges.map((range) => {
    if (value > range.lowerValue && value <= range.upperValue) {
      result = (colors[range.color] || colors.default);
    }
    return null;
  });
  return result;
};
