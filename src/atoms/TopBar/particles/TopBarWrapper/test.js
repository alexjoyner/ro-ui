import React from 'react';
import { shallow } from 'enzyme';
import { TopBarWrapper } from './';

describe('TopBarWrapper component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<TopBarWrapper />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('Should display apply correct props when not sticky', () => {
    expect(component).not.toHaveStyleRule('z-index', '200');
    expect(component).not.toHaveStyleRule('position', 'fixed');
    expect(component).not.toHaveStyleRule('top', '0');
  });
  it('Should display apply correct props when sticky', () => {
    const testSticky = shallow(<TopBarWrapper sticky />);
    expect(testSticky).toHaveStyleRule('z-index', '200');
    expect(testSticky).toHaveStyleRule('position', 'fixed');
    expect(testSticky).toHaveStyleRule('top', '0');
  });
  it('should default to a height of 67px', () => {
    expect(component).toHaveStyleRule('height', '67px');
  });
  it('should accept a height prop', () => {
    const testHeight = shallow(<TopBarWrapper height="100px" />);
    expect(testHeight).toHaveStyleRule('height', '100px');
  });
  it('should apply line height from height prop', () => {
    const testHeight = shallow(<TopBarWrapper height="100px" />);
    expect(testHeight).toHaveStyleRule('line-height', '100px');
  });
  it('should accept a color prop', () => {
    const testHeight = shallow(<TopBarWrapper color="blue" />);
    expect(testHeight).toHaveStyleRule('background-color', 'blue');
  });
});
