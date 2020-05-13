import React from 'react';
import { mount } from 'enzyme';
import { PanelContainer } from '.';

describe('PanelContainer component', () => {
  let component;
  beforeEach(() => {
    component = mount(<PanelContainer />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('should have correct default styles', () => {
    expect(component).toHaveStyleRule('display', 'block');
    expect(component).toHaveStyleRule('min-width', '280px');
  });
  it('should apply correct min width', () => {
    const minWidthTest = mount(<PanelContainer minWidth="300px" />);
    expect(minWidthTest).toHaveStyleRule('min-width', '300px');
  });
  it('should apply correct width styles', () => {
    const widthTest = mount(<PanelContainer width="600px" />);
    expect(widthTest).toHaveStyleRule('width', '600px');
    expect(widthTest).toHaveStyleRule('display', 'inline-block');
  });
});
