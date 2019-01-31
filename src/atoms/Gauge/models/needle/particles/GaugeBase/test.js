import React from 'react';
import { shallow } from 'enzyme';
import { GaugeBase } from '.';

describe('GaugeBase component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<GaugeBase />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
