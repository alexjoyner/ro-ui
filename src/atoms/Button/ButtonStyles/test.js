import React from 'react';
import { shallow } from 'enzyme';
import { ButtonStyles } from './';

describe('ButtonStyles component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<ButtonStyles />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
