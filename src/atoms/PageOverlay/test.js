import React from 'react';
import { shallow } from 'enzyme';
import { PageOverlay } from './';

describe('PageOverlay component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<PageOverlay />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
