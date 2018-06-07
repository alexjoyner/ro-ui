import React from 'react';
import { shallow } from 'enzyme';
import { PanelContainer } from './';

describe('PanelContainer component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<PanelContainer />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
