import React from 'react';
import { shallow } from 'enzyme';
import { CenteredContent } from './';

describe('CenteredContent component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<CenteredContent />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
