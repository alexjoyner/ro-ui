import { gaugeValueToAngle } from '.';

describe('gaugeValueToAngle', () => {
  const opts = {
    min: 0,
    max: 100,
  };
  it('should return a number', () => {
    expect(typeof gaugeValueToAngle(opts, 50)).toBe('number');
  });
  it('Should return correct angle value', () => {
    expect(gaugeValueToAngle(opts, 50)).toBe(90);
    expect(gaugeValueToAngle(opts, 25)).toBe(45);
    expect(gaugeValueToAngle(opts, 75)).toBe(135);
  });
});
