import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '.';

describe('Button component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Button>Test Button</Button>);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('Should contain correct text', () => {
    expect(component.contains('Test Button')).toEqual(true);
  });
});
