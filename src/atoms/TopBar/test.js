import React from 'react';
import { shallow } from 'enzyme';
import { TopBar } from './';

describe('TopBar component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<TopBar />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
