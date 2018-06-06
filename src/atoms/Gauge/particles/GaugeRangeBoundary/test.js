import React from 'react';
import { shallow } from 'enzyme';
import { GaugeRangeBoundary } from './';

describe('GaugeRangeBoundary component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<GaugeRangeBoundary />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
