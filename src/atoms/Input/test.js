import React from 'react';
import { shallow } from 'enzyme';
import { Input } from './';

describe('Input component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Input labelText="Hello World" />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('Should contain Hello World text', () => {
    expect(component.contains('Hello World')).toBe(true);
  });
});
