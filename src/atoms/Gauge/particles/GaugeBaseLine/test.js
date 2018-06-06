import React from 'react';
import { shallow } from 'enzyme';
import { GaugeBaseLine } from './';

describe('GaugeBaseLine component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<GaugeBaseLine />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
