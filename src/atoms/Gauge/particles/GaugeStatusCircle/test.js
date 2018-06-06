import React from 'react';
import { shallow } from 'enzyme';
import { GaugeStatusCircle } from './';

describe('GaugeStatusCircle component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<GaugeStatusCircle />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
