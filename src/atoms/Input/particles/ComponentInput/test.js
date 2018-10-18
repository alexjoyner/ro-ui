import React from 'react';
import { shallow } from 'enzyme';
import { ComponentInput } from '.';
import { colors } from '../../../colors';

describe('ComponentInput component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<ComponentInput />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('should show red border when error prop received', () => {
    const errTest = shallow(<ComponentInput error />);
    expect(errTest).toHaveStyleRule('border-bottom', `solid 2px ${colors.danger}`);
  });
  it('should default to correct border color', () => {
    expect(component).toHaveStyleRule('border-bottom', `solid 2px ${colors.primary}`);
  });
});
