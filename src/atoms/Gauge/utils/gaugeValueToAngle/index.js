import { getPercentage } from '../getPercentage';

export const gaugeValueToAngle = (opts, value) => (180 * getPercentage(value, opts.max, opts.min));
