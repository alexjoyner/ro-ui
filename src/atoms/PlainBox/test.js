import React from 'react';
import { shallow } from 'enzyme';
import { PlainBox } from './';

describe('PlainBox component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<PlainBox />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
