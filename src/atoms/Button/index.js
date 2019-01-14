import React from 'react';
import { ButtonWrapper } from './ButtonWrapper';
import { ButtonStyles } from './ButtonStyles';

const mergePropsWithOverrides = (props) => {
  const overrides = props.overrides || {};
  return { ...props, ...overrides[props.name] } || {};
};

const Button = (props) => {
  const sharedProps = mergePropsWithOverrides(props);
  const {
    color, size, ghost, children, ...restProps
  } = sharedProps;
  return (
    <ButtonWrapper {...restProps} type="button">
      {/* Passing props to Button Styles seperately to fix double onClick events from button */}
      <ButtonStyles
        color={color}
        size={size}
        ghost={ghost}
        tabIndex={-1}
      >
        {children}
      </ButtonStyles>
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  color: 'default',
  size: 'default',
  ghost: false,
};

export { Button };
