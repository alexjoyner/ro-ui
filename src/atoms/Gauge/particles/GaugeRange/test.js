import React from 'react';
import { shallow } from 'enzyme';
import { GaugeRange } from './';

describe('GaugeRange component', () => {
  let component;
  beforeEach(() => {
    const opts = {
      height: 'auto',
      width: '100%',
      radius: 120.5,
      center: {
        x: 125,
        y: 150,
      },
      value: 0,
      units: '',
      max: 100,
      min: 0,
      ranges: [{
        lowerValue: 0,
        upperValue: 100,
        color: '#f1c40f',
        id: 'range1',
      }],
    };
    component = shallow(<GaugeRange opts={opts} range={opts.ranges[0]} />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
