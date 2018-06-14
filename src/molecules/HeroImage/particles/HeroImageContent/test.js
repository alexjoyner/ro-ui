import React from 'react';
import { shallow } from 'enzyme';
import { HeroImageContent } from './';

describe('HeroImageContent component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<HeroImageContent />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
