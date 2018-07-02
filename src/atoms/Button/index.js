// @flow
import React from 'react';
import { ButtonWrapper } from './ButtonWrapper';
import { ButtonStyles } from './ButtonStyles';

type ButtonProps = {
  primary?: boolean,
  success?: boolean,
  warning?: boolean,
  danger?: boolean,
  small?: boolean,
  dark?: boolean,
  large?: boolean,
  ghost?: boolean,
  children: any,
};

const Button = (props: ButtonProps) => (
  <ButtonWrapper {...props} type="button">
    <ButtonStyles {...props} tabIndex={-1}>
      {props.children}
    </ButtonStyles>
  </ButtonWrapper>
);

Button.defaultProps = {
  primary: false,
  success: false,
  warning: false,
  danger: false,
  dark: false,
  small: false,
  large: false,
  ghost: false,
};

export { Button };

