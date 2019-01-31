import React from 'react';
import { mount } from 'enzyme';
import { ListHeader } from '.';
import { colors } from '../../_depreciated/colors';

describe('ListHeader component', () => {
  let component;
  beforeEach(() => {
    component = mount(<ListHeader />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('Should have correct default styles', () => {
    expect(component).toHaveStyleRule('background-color', colors.darkLight);
    expect(component).toHaveStyleRule('color', 'white');
  });
  it('Should set correct color styles', () => {
    component.setProps({
      color: 'warningLight',
    });
    expect(component).toHaveStyleRule('background-color', colors.warningLight);
    expect(component).toHaveStyleRule('color', 'black');
  });
});
