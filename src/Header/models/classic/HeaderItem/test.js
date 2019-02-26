import React from 'react';
import { mount } from 'enzyme';
import { HeaderItem } from '.';

describe('HeaderItem', () => {
  let component;
  beforeEach(() => {
    component = mount(<HeaderItem />);
  });
  it('should exist', () => {
    expect(component).toBeDefined();
  });
  it('should properly contain the component', () => {
    expect(component).toHaveStyleRule('height', '40px');
    expect(component).toHaveStyleRule('min-width', '40px');
  });
  it('should have contents in the center', () => {
    expect(component).toHaveStyleRule('display', 'flex');
    expect(component).toHaveStyleRule('flex-direction', 'row');
    expect(component).toHaveStyleRule('align-items', 'center');
  });
});
