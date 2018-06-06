import React from 'react';
import { shallow } from 'enzyme';
import { GaugeOuterCircle } from './';

describe('GaugeOuterCircle component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<GaugeOuterCircle />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
