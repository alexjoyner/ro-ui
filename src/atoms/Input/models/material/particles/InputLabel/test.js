import React from 'react';
import { mount } from 'enzyme';
import { InputLabel } from '.';
import { colors } from '../../../../../../_depreciated/colors';

describe('InputLabel component', () => {
  let component;
  beforeEach(() => {
    component = mount(<InputLabel inputValue="" />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('should have correct default color', () => {
    expect(component).toHaveStyleRule('color', colors.primary);
  });
  it('should have correct color when error', () => {
    const errTest = mount(<InputLabel error />);
    expect(errTest).toHaveStyleRule('color', colors.danger);
  });
  it('should have correct default positioning', () => {
    expect(component).toHaveStyleRule('top', '50%');
  });
  it('should have correct positioning when input value changes', () => {
    const valChange = mount(<InputLabel inputValue="Testing" />);
    expect(valChange).toHaveStyleRule('top', '2px');
    expect(valChange).toHaveStyleRule('font-size', '12px');
  });
});
