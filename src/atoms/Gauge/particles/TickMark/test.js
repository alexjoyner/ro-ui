import React from 'react';
import { shallow } from 'enzyme';
import { TickMark } from '.';

describe('TickMark component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<TickMark angle={25} />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
