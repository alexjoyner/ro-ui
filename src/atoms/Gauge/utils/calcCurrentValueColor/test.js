import { calcCurrentValueColor } from './';

describe('calcColor', () => {
  const ranges = [{
    lowerValue: 0,
    upperValue: 50,
    color: 'orange',
    id: 'range1',
  }, {
    lowerValue: 50,
    upperValue: 80,
    color: 'green',
    id: 'range2',
  }, {
    lowerValue: 80,
    upperValue: 100,
    color: 'red',
    id: 'range3',
  }];
  it('Should return orange', () => {
    expect(calcCurrentValueColor(25, ranges)).toEqual('orange');
    expect(calcCurrentValueColor(1, ranges)).toEqual('orange');
    expect(calcCurrentValueColor(50, ranges)).toEqual('orange');
  });
  it('Should return green', () => {
    expect(calcCurrentValueColor(75, ranges)).toEqual('green');
    expect(calcCurrentValueColor(51, ranges)).toEqual('green');
    expect(calcCurrentValueColor(80, ranges)).toEqual('green');
  });
  it('Should return red', () => {
    expect(calcCurrentValueColor(81, ranges)).toEqual('red');
    expect(calcCurrentValueColor(90, ranges)).toEqual('red');
    expect(calcCurrentValueColor(100, ranges)).toEqual('red');
  });
  it('Should allow non number values', () => {
    expect(calcCurrentValueColor('34', ranges)).toEqual('orange');
    expect(calcCurrentValueColor('75', ranges)).toEqual('green');
    expect(calcCurrentValueColor('90', ranges)).toEqual('red');
  });
});
