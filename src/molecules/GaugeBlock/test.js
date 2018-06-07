import React from 'react';
import { shallow } from 'enzyme';
import { GaugeBlock } from './';

describe('GaugeBlock component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<GaugeBlock />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
