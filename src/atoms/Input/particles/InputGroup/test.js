import React from 'react';
import { shallow } from 'enzyme';
import { InputGroup } from './';

describe('InputGroup component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<InputGroup />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
