import React from 'react';
import { mount } from 'enzyme';
import { HeaderItemWrapper } from '.';

describe('HeaderItemWrapper', () => {
  let component;
  beforeEach(() => {
    component = mount(<HeaderItemWrapper />);
  });
  it('should exist', () => {
    expect(component).toBeDefined();
  });
  xit('should properly contain the component', () => {
    expect(component).toHaveStyle('');
  });
});
