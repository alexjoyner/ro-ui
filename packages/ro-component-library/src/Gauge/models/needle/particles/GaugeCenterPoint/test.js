import React from 'react';
import { shallow } from 'enzyme';
import { GaugeCenterPoint } from '.';

describe('GaugeCenterPoint component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<GaugeCenterPoint />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
