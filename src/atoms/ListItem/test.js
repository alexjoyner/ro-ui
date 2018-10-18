import React from 'react';
import { shallow } from 'enzyme';
import { ListItem } from '.';

describe('ListItem component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<ListItem />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
