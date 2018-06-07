import React from 'react';
import { shallow } from 'enzyme';
import { InputLabel } from './';

describe('InputLabel component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<InputLabel />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
