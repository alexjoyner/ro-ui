import React from 'react';
import { mount } from 'enzyme';
import { Wrapper } from '.';

describe('Wrapper component', () => {
  let component;
  beforeEach(() => {
    component = mount(<Wrapper />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('should default to correct height', () => {
    expect(component).toHaveStyleRule('height', '100vh');
  });
  it('should accept a height prop', () => {
    const heightTest = mount(<Wrapper height="50vh" />);
    expect(heightTest).toHaveStyleRule('height', '50vh');
  });
  it('should return null background image if none is passed', () => {
    expect(component).not.toHaveStyleRule('background-image', 'url(undefined)');
  });
  it('accepts a background image prop', () => {
    const bgImageTest = mount(<Wrapper imageSrc="Testing" />);
    expect(bgImageTest).toHaveStyleRule('background-image', 'url(Testing)');
  });
});
