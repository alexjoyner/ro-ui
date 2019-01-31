import { calcCurrentValueColor } from '.';
import { colors } from '../../../../../../_depreciated/colors';

describe('calcColor', () => {
  const ranges = [{
    lowerValue: 0,
    upperValue: 50,
    color: 'warning',
    id: 'range1',
  }, {
    lowerValue: 50,
    upperValue: 80,
    color: 'success',
    id: 'range2',
  }, {
    lowerValue: 80,
    upperValue: 100,
    color: 'danger',
    id: 'range3',
  }];
  it('Should return orange', () => {
    expect(calcCurrentValueColor(25, ranges)).toEqual(colors.warning);
    expect(calcCurrentValueColor(1, ranges)).toEqual(colors.warning);
    expect(calcCurrentValueColor(50, ranges)).toEqual(colors.warning);
  });
  it('Should return green', () => {
    expect(calcCurrentValueColor(75, ranges)).toEqual(colors.success);
    expect(calcCurrentValueColor(51, ranges)).toEqual(colors.success);
    expect(calcCurrentValueColor(80, ranges)).toEqual(colors.success);
  });
  it('Should return red', () => {
    expect(calcCurrentValueColor(81, ranges)).toEqual(colors.danger);
    expect(calcCurrentValueColor(90, ranges)).toEqual(colors.danger);
    expect(calcCurrentValueColor(100, ranges)).toEqual(colors.danger);
  });
  it('Should allow non number values', () => {
    expect(calcCurrentValueColor('34', ranges)).toEqual(colors.warning);
    expect(calcCurrentValueColor('75', ranges)).toEqual(colors.success);
    expect(calcCurrentValueColor('90', ranges)).toEqual(colors.danger);
  });
});
