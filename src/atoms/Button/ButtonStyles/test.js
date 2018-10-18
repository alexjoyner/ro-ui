import React from 'react';
import { shallow } from 'enzyme';
import { ButtonStyles } from '.';

describe('ButtonStyles component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<ButtonStyles />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('should have correct padding', () => {
    const caseSmall = shallow(<ButtonStyles size="small" />);
    const caseLarge = shallow(<ButtonStyles size="large" />);
    expect(component).toHaveStyleRule('padding', '.375rem .75rem');
    expect(caseSmall).toHaveStyleRule('padding', '.25rem .5rem');
    expect(caseLarge).toHaveStyleRule('padding', '.5rem 1rem');
  });
  it('should have correct font size', () => {
    const caseSmall = shallow(<ButtonStyles size="small" />);
    const caseLarge = shallow(<ButtonStyles size="large" />);
    expect(component).toHaveStyleRule('font-size', '1rem');
    expect(caseSmall).toHaveStyleRule('font-size', '.875rem');
    expect(caseLarge).toHaveStyleRule('font-size', '1.25rem');
  });
  it('should have correct settings when ghost', () => {
    const caseGhost = shallow(<ButtonStyles ghost />);
    expect(caseGhost).toHaveStyleRule('border-width', '1px');
    expect(caseGhost).toHaveStyleRule('color', 'white');
    expect(caseGhost).toHaveStyleRule('background-color', 'transparent');
  });
});
