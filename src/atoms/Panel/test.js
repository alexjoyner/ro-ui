import React from 'react';
import { shallow } from 'enzyme';
import { Panel } from './';

describe('Panel component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Panel />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
