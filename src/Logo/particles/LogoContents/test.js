import React from 'react';
import { shallow } from 'enzyme';
import { LogoContents } from '.';

describe('LogoContents component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<LogoContents />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
