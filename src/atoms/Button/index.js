// @flow
import React from 'react';
import { ButtonWrapper } from './ButtonWrapper';
import { ButtonStyles } from './ButtonStyles';

type ButtonProps = {
  primary?: boolean,
  success?: boolean,
  warning?: boolean,
  danger?: boolean,
  dark?: boolean,
  xsmall?: boolean,
  small?: boolean,
  large?: boolean,
  ghost?: boolean,
  children: any,
};

const Button = (props: ButtonProps) => {
  const {
    primary, success, warning, danger, dark,
    xsmall, small, large, ghost,
  } = props;
  const styleProps = {
    primary,
    success,
    warning,
    danger,
    dark,
    xsmall,
    small,
    large,
    ghost,
  };
  return (
    <ButtonWrapper {...props} type="button">
      <ButtonStyles {...styleProps} tabIndex={-1}>
        {props.children}
      </ButtonStyles>
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  primary: false,
  success: false,
  warning: false,
  danger: false,
  dark: false,
  xsmall: false,
  small: false,
  large: false,
  ghost: false,
};

export { Button };

