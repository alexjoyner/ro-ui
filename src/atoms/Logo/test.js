import React from 'react';
import { shallow } from 'enzyme';
import { Logo } from './';

describe('Logo component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Logo logoText="Test" />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('Should contain test text', () => {
    expect(component.contains('Test')).toBe(true);
  });
});
