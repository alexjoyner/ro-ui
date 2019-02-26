import { getPercentage } from '../getPercentage';

export const getLabelOffset = (edgePointX, rangeUpperValue, opts) => (
  (edgePointX - 15) + (30 * getPercentage(rangeUpperValue, opts.max, opts.min))
);
