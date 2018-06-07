import React from 'react';
import { shallow } from 'enzyme';
import { Graph } from '.';


describe('Features/Graph', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Graph chartID="test-chart" chartOpts={{}} />);
  });
  it('renders without exploding', () => {
    expect(component).toMatchSnapshot();
  });
});
