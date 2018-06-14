import React from 'react';
import { mount } from 'enzyme';
import { HeaderLogo } from './';

describe('HeaderLogo component', () => {
  let component;
  beforeEach(() => {
    component = mount(<HeaderLogo logoText="Testing" />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('should default to white font color', () => {
    expect(component).toHaveStyleRule('color', 'white');
  });
  it('should apply a passed font color', () => {
    const colorTest = mount(<HeaderLogo logoText="Testing" fontColor="blue" />);
    expect(colorTest).toHaveStyleRule('color', 'blue');
  });
});
