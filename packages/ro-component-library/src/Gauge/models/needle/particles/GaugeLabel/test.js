import React from 'react';
import { shallow } from 'enzyme';
import { GaugeLabel } from '.';

describe('GaugeLabel component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<GaugeLabel />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
