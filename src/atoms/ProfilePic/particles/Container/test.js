import React from 'react';
import { shallow } from 'enzyme';
import { Container } from './';

describe('Container component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Container />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
