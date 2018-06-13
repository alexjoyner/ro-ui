import { getBtnBgColor } from './';
import { colors } from '../../../colors';

describe('getBtnBgColor', () => {
  it('should default to white', () => {
    expect(getBtnBgColor({})).toEqual('white');
  });
  it('should return the primary color', () => {
    expect(getBtnBgColor({ primary: true })).toEqual(colors.primary);
  });
  it('should return the warning color', () => {
    expect(getBtnBgColor({ warning: true })).toEqual(colors.warning);
  });
  it('should return the danger color', () => {
    expect(getBtnBgColor({ danger: true })).toEqual(colors.danger);
  });
  it('should return the success color', () => {
    expect(getBtnBgColor({ success: true })).toEqual(colors.success);
  });
});
