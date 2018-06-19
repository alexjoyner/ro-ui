import { colors } from './';

describe('colors', () => {
  it('Should match all default colors', () => {
    expect(colors).toMatchSnapshot();
  });
});
