import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '.';

describe('Button component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Button />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
});
