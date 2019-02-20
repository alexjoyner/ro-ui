import React from 'react';
import { mount } from 'enzyme';
import { Go } from '.';

describe('Go Atom', () => {
  let component;
  beforeEach(() => {
    component = mount(<Go to="TESTING" />);
  });
  it('should exist', () => {
    expect(component).toBeDefined();
  });
  it('should have a correct link setup', () => {
    const Link = component.find('a');
    expect(Link.props().href).toEqual('TESTING');
  });
  it('it should have no decoration', () => {
    expect(component).toHaveStyleRule('text-decoration', 'none');
    expect(component).toHaveStyleRule('color', 'inherit');
  });
});
