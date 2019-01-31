import React from 'react';
import { mount } from 'enzyme';
import { Button } from '.';

describe('Button component', () => {
  it('Basic Render', () => {
    const component = mount(<Button />);
    expect(component).toBeDefined();
    // expect(component.find(StartEnhancer)).not.toExist();
  });
});
