import { calcCurrentValueColor } from '.';
import { colors } from '../../../../../../_depreciated/colors';

describe('calcColor', () => {
  const ranges = [{
    lowerValue: 0,
    upperValue: 50,
    alertLevel: 'warning',
    id: 'range1',
  }, {
    lowerValue: 50,
    upperValue: 80,
    alertLevel: 'success',
    id: 'range2',
  }, {
    lowerValue: 80,
    upperValue: 100,
    alertLevel: 'danger',
    id: 'range3',
  }];
  it('Should return orange', () => {
    expect(calcCurrentValueColor(25, ranges)).toEqual(colors.warning);
    expect(calcCurrentValueColor(1, ranges)).toEqual(colors.warning);
  });
  it('Should return green', () => {
    expect(calcCurrentValueColor(50, ranges)).toEqual(colors.success);
    expect(calcCurrentValueColor(75, ranges)).toEqual(colors.success);
    expect(calcCurrentValueColor(51, ranges)).toEqual(colors.success);
  });
  it('Should return red', () => {
    expect(calcCurrentValueColor(80, ranges)).toEqual(colors.danger);
    expect(calcCurrentValueColor(81, ranges)).toEqual(colors.danger);
    expect(calcCurrentValueColor(90, ranges)).toEqual(colors.danger);
    expect(calcCurrentValueColor(100, ranges)).toEqual(colors.danger);
  });
  it('Should allow non number values', () => {
    expect(calcCurrentValueColor('34', ranges)).toEqual(colors.warning);
    expect(calcCurrentValueColor('75', ranges)).toEqual(colors.success);
    expect(calcCurrentValueColor('90', ranges)).toEqual(colors.danger);
  });
  it('Should throw if no ranges are passed', () => {
    expect(() => calcCurrentValueColor('34')).toThrow();
  });
  it('Should throw if good value is passed', () => {
    expect(() => calcCurrentValueColor(null, [])).toThrow();
    expect(() => calcCurrentValueColor(0, [])).not.toThrow();
    expect(() => calcCurrentValueColor('0', [])).not.toThrow();
  });
});
