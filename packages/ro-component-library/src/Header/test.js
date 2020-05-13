import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '.';

describe('Header component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Header />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
