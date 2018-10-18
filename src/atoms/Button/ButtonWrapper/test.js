import React from 'react';
import { mount } from 'enzyme';
import { ButtonWrapper } from '.';

describe('ButtonWrapper component', () => {
  let component;
  beforeEach(() => {
    component = mount(<ButtonWrapper />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
