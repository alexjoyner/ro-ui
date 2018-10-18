import React from 'react';
import { shallow } from 'enzyme';
import { $ISideBar } from '.';

const SideBar = () => (
  <h1>Test SideBar</h1>
);
const Body = () => (
  <h1>Test Body</h1>
);

describe('$ISideBar Behavior', () => {
  let component;
  let props;
  beforeEach(() => {
    props = {
      shown: true,
      SideBar,
      Body,
    };
    component = shallow(<$ISideBar {...props} />);
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
  it('Should have a page body', () => {
    expect(component.find('Body')).toHaveLength(1);
  });
});
