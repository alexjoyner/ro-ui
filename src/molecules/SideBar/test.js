import React from 'react';
import { mount } from 'enzyme';
import { SideBar } from './';

describe('SideBar component', () => {
  let component;
  beforeEach(() => {
    component = mount(<SideBar />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('should change toggle shown state when button is clicked', () => {
    expect(component.state().shown).toBe(false);
    component.find('button').simulate('click');
    expect(component.state().shown).toBe(true);
  });
});
