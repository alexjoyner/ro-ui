import React from 'react';
import { shallow } from 'enzyme';
import { ISideBar } from './';

const SideBar = () => (
  <h1>Test SideBar</h1>
);

describe('ISideBar Behavior', () => {
  let component;
  let props;
  beforeEach(() => {
    props = {
      shown: true,
      SideBar,
    };
    component = shallow(<ISideBar {...props} />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  // it('Should match snapshot', () => {
  //   expect(component).toMatchSnapshot();
  // });
  it('Should contain a sidebar', () => {
    expect(component.find('SideBar')).toHaveLength(1);
  });
  it('Should hide the sidebar', () => {
    component.setProps({
      ...props,
      shown: false,
    });
    expect(component.find('SideBar')).toHaveLength(0);
  });
});
