import React from 'react';
import { shallow } from 'enzyme';
import { Block } from '.';

describe('Button component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Block />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
});
