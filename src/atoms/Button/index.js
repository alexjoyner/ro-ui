import React from 'react';
import { getComponents } from '../../utils/getComponents';
import defaultComps from './defaults';

const Button = (props) => {
  const {
    color, size, ghost, children, overrides, ...rest
  } = props;
  const {
    ButtonWrapper: { component: ButtonWrapper, props: buttonWrapperProps },
    ButtonStyles: { component: ButtonStyles, props: buttonStylesProps },
  } = getComponents(defaultComps, overrides);
  return (
    <ButtonWrapper {...rest} {...buttonWrapperProps} type="button">
      {/* Passing props to Button Styles seperately to fix double onClick events from button */}
      <ButtonStyles
        color={color}
        size={size}
        ghost={ghost}
        tabIndex={-1}
        {...buttonStylesProps}
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
