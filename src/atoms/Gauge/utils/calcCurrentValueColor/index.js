export const calcColor = (value, ranges) => {
  let result = null;
  ranges.map((range) => {
    if (value > range.lowerValue && value <= range.upperValue) { result = range.color; }
    return null;
  });
  return result;
};
