import { getTextContrastColor } from '.';
import { colors } from '../../_depreciated/colors';

describe('getBtnTextColor', () => {
  it('Should fail', () => {
    function testGetTextContrastColor() {
      getTextContrastColor();
    }
    expect(testGetTextContrastColor).toThrowError(TypeError);
  });
  it('should return white', () => {
    expect(getTextContrastColor(colors.primary)).toEqual('white');
    expect(getTextContrastColor(colors.danger)).toEqual('white');
    expect(getTextContrastColor(colors.success)).toEqual('white');
    expect(getTextContrastColor(colors.warning)).toEqual('black');
  });
});
