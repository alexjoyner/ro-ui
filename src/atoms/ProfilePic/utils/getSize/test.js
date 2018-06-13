import { getSize } from './';

describe('getSize', () => {
  it('should default to correct size', () => {
    expect(getSize({})).toEqual('100px');
  });
  it('should return correct size', () => {
    expect(getSize({ small: true })).toEqual('50px');
    expect(getSize({ large: true })).toEqual('150px');
  });
});
