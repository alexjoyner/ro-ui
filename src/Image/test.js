import React from 'react';
import { shallow } from 'enzyme';
import { Image } from '.';

describe('Image component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Image imgSrc="Test" />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
