import React from 'react';
import { shallow } from 'enzyme';
import { OverlayWrapper } from '.';

describe('OverlayWrapper component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<OverlayWrapper />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
