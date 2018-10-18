import React from 'react';
import { shallow } from 'enzyme';
import { RangePath } from '.';

describe('RangePath component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<RangePath />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
