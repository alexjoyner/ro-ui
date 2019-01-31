import React from 'react';
import { shallow } from 'enzyme';
import { PageOverlayWrapper } from '.';

describe('PageOverlayWrapper component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<PageOverlayWrapper />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
