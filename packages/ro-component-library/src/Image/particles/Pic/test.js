import React from 'react';
import { shallow } from 'enzyme';
import { Pic } from '.';

describe('Pic component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Pic />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
