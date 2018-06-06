import { colors } from './';

describe('colors', () => {
  it('Should match all default colors', () => {
    expect(colors).toEqual({
      primaryLight: '#74b9ff',
      primary: '#0984e3',
      successLight: '#55efc4',
      success: '#00b894',
      warningLight: '#ffeaa7',
      warning: '#fdcb6e',
      dangerLight: '#ff7675',
      danger: '#d63031',
    });
  });
});
