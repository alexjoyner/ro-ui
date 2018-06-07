import React from 'react';
import { shallow } from 'enzyme';
import { ImageOverlay } from './';

describe('ImageOverlay component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<ImageOverlay />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
