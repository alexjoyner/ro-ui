import React from 'react';
import { mount } from 'enzyme';
import { PlainBox } from '.';

describe('PlainBox component', () => {
  let component;
  beforeEach(() => {
    component = mount(<PlainBox />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('should have correct default styles', () => {
    expect(component).toHaveStyleRule('height', '100px');
    expect(component).toHaveStyleRule('width', '100px');
    expect(component).toHaveStyleRule('margin', '10px');
    expect(component).toHaveStyleRule('min-width', '300px');
  });
  it('should apply correct sizing', () => {
    const sizeTest = mount(<PlainBox height="123px" width="456px" />);
    expect(sizeTest).toHaveStyleRule('height', '123px');
    expect(sizeTest).toHaveStyleRule('width', '456px');
  });
  it('should apply correct margin', () => {
    const marginTest = mount(<PlainBox margin="12px" />);
    expect(marginTest).toHaveStyleRule('margin', '12px');
  });
  it('should apply correct min width', () => {
    const minWidthTest = mount(<PlainBox minWidth="300px" />);
    expect(minWidthTest).toHaveStyleRule('min-width', '300px');
  });
});
