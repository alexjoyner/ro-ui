import React from 'react';
import { shallow } from 'enzyme';
import { GaugeCirclesGroup } from './';

describe('GaugeCirclesGroup component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<GaugeCirclesGroup />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
