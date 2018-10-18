import React from 'react';
import { shallow } from 'enzyme';
import { Needle } from '.';

describe('Needle component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Needle />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
