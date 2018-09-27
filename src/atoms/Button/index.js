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

const Button = ({
  color, size, ghost, ...props
}: ButtonProps) => (
  <ButtonWrapper {...props} type="button">
    {/* Passing props to Button Styles seperately to fix double onClick events from button */}
    <ButtonStyles
      color={color}
      size={size}
      ghost={ghost}
      tabIndex={-1}
    >
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

