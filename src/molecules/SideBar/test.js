import React from 'react';
import { shallow } from 'enzyme';
import { SideBar } from './';

describe('SideBar component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<SideBar />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
