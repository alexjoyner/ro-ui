import React from 'react';
import { mount } from 'enzyme';
import { SideBarBtn } from './';

describe('SideBarBtn component', () => {
  let component;
  beforeEach(() => {
    component = mount(<SideBarBtn />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('should default to correct position', () => {
    expect(component).toHaveStyleRule('left', '7px');
  });
  it('should accept shown prop and change style', () => {
    const shownTest = mount(<SideBarBtn shown />);
    expect(shownTest).toHaveStyleRule('left', '260px');
  });
});
