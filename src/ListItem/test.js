import React from 'react';
import { mount } from 'enzyme';
import { ListItem } from '.';
import { colors } from '../colors';

describe('ListItem component', () => {
  let component;
  beforeEach(() => {
    component = mount(<ListItem />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('Should have correct default styles', () => {
    expect(component).toHaveStyleRule('box-sizing', 'border-box');
    expect(component).toHaveStyleRule('background-color', colors.darkLight);
    expect(component).toHaveStyleRule('color', 'white');
  });
});
