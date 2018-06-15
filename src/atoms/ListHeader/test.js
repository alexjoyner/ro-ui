import React from 'react';
import { shallow } from 'enzyme';
import { ListHeader } from './';

describe('ListHeader component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<ListHeader />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
