import React from 'react';
import { shallow } from 'enzyme';
import { ComponentInput } from './';

describe('ComponentInput component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<ComponentInput />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
