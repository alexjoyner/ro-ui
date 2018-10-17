import React from 'react';
import { shallow } from 'enzyme';
import BasicSideBarPageBody, { HeaderSideBarPageBody } from './';

describe('SideBarPageBody component', () => {
  let component;
  let props;
  describe('Basic Version', () => {
    beforeEach(() => {
      props = {
        sideBarShown: true,
      };
      component = shallow(<BasicSideBarPageBody {...props} />);
    });
    it('Should render without exploding', () => {
      expect(component).toBeDefined();
    });
    it('Should match snapshot', () => {
      expect(component).toMatchSnapshot();
    });
    it('Should have default styles', () => {
      expect(component).toHaveStyleRule('margin-left', '300px');
      expect(component).toHaveStyleRule('min-height', '10px');
    });
    it('Should extend out if sidebar not shown', () => {
      component.setProps({
        ...props,
        sideBarShown: false,
      });
      expect(component).toHaveStyleRule('margin-left', '0px');
    });
  });
  describe('with Header Version', () => {
    beforeEach(() => {
      component = shallow(<HeaderSideBarPageBody />);
    });
    it('Should render without exploding', () => {
      expect(component).toBeDefined();
    });
    it('Should match snapshot', () => {
      expect(component).toMatchSnapshot();
    });
    it('Should have default styles', () => {
      expect(component).toHaveStyleRule('margin-top', '56px');
    });
  });
});
