// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './ButtonWrapper';
import { ButtonStyles } from './ButtonStyles';

type ButtonProps = {
  primary?: PropTypes.bool,
  success?: PropTypes.bool,
  warning?: PropTypes.bool,
  danger?: PropTypes.bool,
  small?: PropTypes.bool,
  large?: PropTypes.bool,
  ghost?: PropTypes.bool,
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
  small: false,
  large: false,
  ghost: false,
};

export { Button };

