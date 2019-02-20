import React from 'react';
import { mount } from 'enzyme';
import { Button } from '.';

describe('Button component', () => {
  let component;
  beforeEach(() => {
    component = mount(<Button>Test Button</Button>);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should contain correct text', () => {
    expect(component.contains('Test Button')).toEqual(true);
  });
});
