import React from 'react';
import { shallow } from 'enzyme';
import { SideBarContainer } from './';

describe('SideBarContainer component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<SideBarContainer />);
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
    const shownTest = shallow(<SideBarContainer shown />);
    expect(shownTest).toHaveStyleRule('left', '0px');
  });
});
