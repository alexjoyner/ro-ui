import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './';


describe('Button', () => {
  it('Should render without exploding', () => {
    const component = shallow(<Button />);
    expect(component).toMatchSnapshot();
  });
});
