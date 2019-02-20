import React from 'react';
import { shallow } from 'enzyme';
import { Overlay } from '.';

describe('Overlay component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Overlay />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
