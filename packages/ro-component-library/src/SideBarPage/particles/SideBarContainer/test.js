import React from 'react';
import { mount } from 'enzyme';
import { SideBarContainer } from '.';

describe('SideBarContainer component', () => {
  let component;
  beforeEach(() => {
    component = mount(<SideBarContainer />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('should default to correct position', () => {
    expect(component).toHaveStyleRule('left', '-250px');
  });
  it('should accept shown prop and change style', () => {
    const shownTest = mount(<SideBarContainer shown />);
    expect(shownTest).toHaveStyleRule('left', '0px');
  });
});
