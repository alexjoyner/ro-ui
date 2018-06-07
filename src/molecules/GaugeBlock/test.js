import React from 'react';
import { shallow } from 'enzyme';
import { GaugeBlock } from './';

describe('GaugeBlock component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<GaugeBlock label="Test Sensor" value={20} />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('Should display the label', () => {
    expect(component.contains('Test Sensor')).toBe(true);
  });
});
