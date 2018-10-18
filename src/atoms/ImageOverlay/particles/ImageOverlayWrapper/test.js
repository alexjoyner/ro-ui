import React from 'react';
import { shallow } from 'enzyme';
import { ImageOverlayWrapper } from '.';

describe('ImageOverlayWrapper component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<ImageOverlayWrapper />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
