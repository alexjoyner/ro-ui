import { getStyle } from '.';

describe('getStyle', () => {
  it('should default to correct size', () => {
    expect(getStyle({})).toEqual('0');
  });
  it('should return correct size', () => {
    expect(getStyle({ rounded: true })).toEqual('10px');
    expect(getStyle({ circle: true })).toEqual('50%');
  });
});
