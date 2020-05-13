import React from 'react';
import { shallow } from 'enzyme';
import { GaugeValue } from '.';

describe('GaugeValue component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<GaugeValue />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
