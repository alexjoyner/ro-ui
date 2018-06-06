import React from 'react';
import { shallow } from 'enzyme';
import { ButtonWrapper } from './';

describe('ButtonWrapper component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<ButtonWrapper />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
