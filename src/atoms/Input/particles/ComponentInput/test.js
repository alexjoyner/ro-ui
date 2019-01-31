import React from 'react';
import { mount } from 'enzyme';
import { ComponentInput } from '.';
import { colors } from '../../../../_depreciated/colors';

describe('ComponentInput component', () => {
  let component;
  beforeEach(() => {
    component = mount(<ComponentInput />);
  });
  it('Should render without exploding', () => {
    expect(component).toBeDefined();
  });
  it('Should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('should show red border when error prop received', () => {
    const errTest = mount(<ComponentInput error />);
    expect(errTest).toHaveStyleRule('border-bottom', `solid 2px ${colors.danger}`);
  });
  it('should default to correct border color', () => {
    expect(component).toHaveStyleRule('border-bottom', `solid 2px ${colors.primary}`);
  });
});
