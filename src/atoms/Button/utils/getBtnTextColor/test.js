import { getBtnTextColor } from './';

describe('getBtnTextColor', () => {
  it('Should default to black', () => {
    expect(getBtnTextColor({})).toEqual('black');
  });
  it('should return white', () => {
    expect(getBtnTextColor({ primary: true })).toEqual('white');
    expect(getBtnTextColor({ danger: true })).toEqual('white');
    expect(getBtnTextColor({ success: true })).toEqual('white');
  });
});
