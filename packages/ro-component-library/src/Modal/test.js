import React from 'react';
import { shallow } from 'enzyme';
import { Modal } from '.';

describe('Modal component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Modal />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
