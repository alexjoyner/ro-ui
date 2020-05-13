import React from 'react';
import { shallow } from 'enzyme';
import { Gauge } from '.';

describe('Gauge component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Gauge value={35} />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
