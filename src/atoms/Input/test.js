import React from 'react';
import { mount } from 'enzyme';
import { Input } from './';

describe('Input component', () => {
  let component;
  let props;
  beforeEach(() => {
    props = {
      labelText: 'Hello World',
      onBlur: jest.fn(),
      onChange: jest.fn(),
    };
    component = mount(<Input {...props} />);
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
  it('Should call onBlur function when blurred', () => {
    component.find('input').simulate('blur');
    expect(props.onBlur).toHaveBeenCalled();
  });
  it('Should call onBlur function when changed', () => {
    component.find('input').simulate('change', 'test');
    expect(props.onChange).toHaveBeenCalled();
  });
});
