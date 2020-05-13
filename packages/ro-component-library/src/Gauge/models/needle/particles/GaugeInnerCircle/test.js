import React from 'react';
import { shallow } from 'enzyme';
import { GaugeInnerCircle } from '.';

describe('GaugeInnerCircle component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<GaugeInnerCircle />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
