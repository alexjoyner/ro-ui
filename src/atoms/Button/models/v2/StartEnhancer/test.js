import React from 'react';
import { shallow } from 'enzyme';
import { StartEnhancer } from '.';

describe('StartEnhancer component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<StartEnhancer />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
});
