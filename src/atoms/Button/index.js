// @flow
import React from 'react';
import { ButtonWrapper } from './ButtonWrapper';
import { ButtonStyles } from './ButtonStyles';

type ButtonProps = {
  color?: string,
  size?: string,
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
  color: 'default',
  size: 'default',
  ghost: false,
};

export { Button };

