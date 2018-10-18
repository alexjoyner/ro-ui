import React from 'react';
import { shallow } from 'enzyme';
import { ProfilePic } from '.';

describe('ProfilePic component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<ProfilePic imgSrc="Test" />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
