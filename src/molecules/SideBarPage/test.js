import React from 'react';
import { mount } from 'enzyme';
import { SideBarPage } from './';

describe('SideBarPage component', () => {
  let component;
  beforeEach(() => {
    global.innerWidth = 1201;
    component = mount(<SideBarPage />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('should show by default on windows larger than 1200', () => {
    global.innerWidth = 1201;
    component = mount(<SideBarPage />);
    expect(component.state().shown).toBe(true);
  });
  it('should hide by default on windows larger than 1200', () => {
    global.innerWidth = 1199;
    component = mount(<SideBarPage />);
    expect(component.state().shown).toBe(false);
  });
  it('should change toggle shown state when button is clicked', () => {
    component.find('button').simulate('click');
    expect(component.state().shown).toBe(false);
  });
});
