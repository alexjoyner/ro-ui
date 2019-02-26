import React from 'react';
import { shallow } from 'enzyme';
import { TISideBar } from '.';

const SideBar = () => (
  <h1>Test SideBar</h1>
);
const Body = () => (
  <h1>Test Body</h1>
);

describe('TISideBar Behavior', () => {
  let component;
  let props;
  beforeEach(() => {
    props = {
      shown: true,
      SideBar,
      Body,
    };
    component = shallow(<TISideBar {...props} />);
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
  describe('Sidebar portion', () => {
    let sideBar;
    beforeEach(() => {
      sideBar = component.find('SideBar');
    });
    it('Should hide but not remove the sidebar', () => {
      expect(sideBar).toHaveLength(1);
      component.setProps({
        ...props,
        shown: false,
      });
      expect(sideBar).toHaveLength(1);
    });
    it('Should have prop shown', () => {
      expect(sideBar.props().shown).toBeDefined();
    });
  });
  it('Should have a page body', () => {
    expect(component.find('Body')).toHaveLength(1);
  });
});
