import React from 'react';
import { shallow } from 'enzyme';
import { HeroImage } from '.';

describe('HeroImage component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<HeroImage />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
