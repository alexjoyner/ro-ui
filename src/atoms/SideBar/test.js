import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '.';
import { zIndexes } from '../../utils/zIndexes';
import { colors } from '../colors';

describe('SideBar component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Sidebar />);
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
    expect(component).toHaveStyleRule('left', '0px');
  });
});
