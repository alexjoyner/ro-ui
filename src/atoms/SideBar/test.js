import React from 'react';
import { mount } from 'enzyme';
import { BasicSideBar, AnimatedSideBar } from '.';
import { zIndexes } from '../../utils/zIndexes';
import { colors } from '../colors';

describe('SideBar component', () => {
  let component;
  beforeEach(() => {
    const props = {
      shown: true,
    };
    component = mount(<BasicSideBar {...props} />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  // it('Should match snapshot', () => {
  //   expect(component).toMatchSnapshot();
  // });
  it('should have correct default styles', () => {
    expect(component).toHaveStyleRule('position', 'fixed');
    expect(component).toHaveStyleRule('z-index', zIndexes.SideBar);
    expect(component).toHaveStyleRule('background-color', colors.default);
    expect(component).toHaveStyleRule('height', '100vh');
    expect(component).toHaveStyleRule('width', '300px');
    expect(component).toHaveStyleRule('left', '-250px');
  });
  it('Should set correct color styles', () => {
    component.setProps({
      color: 'warningLight',
    });
    expect(component).toHaveStyleRule('background-color', colors.warningLight);
    expect(component).toHaveStyleRule('color', 'black');
  });
});
describe('AnimatedSideBar', () => {
  let component;
  let props;
  beforeEach(() => {
    props = {
      shown: true,
    };
    component = mount(<AnimatedSideBar {...props} />);
  });
  it('should exist', () => {
    expect(AnimatedSideBar).toBeDefined();
  });
  it('should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('should have animation props', () => {
    expect(component).toHaveStyleRule('transition', '100ms linear');
    expect(component).toHaveStyleRule('left', '0px');
    component.setProps({
      shown: false,
    });
    expect(component).toHaveStyleRule('left', '-250px');
  });
});
