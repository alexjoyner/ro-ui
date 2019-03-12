import React from 'react';
import { styled } from 'baseui/styles';
import { Button as BaseButton, StyledBaseButton } from 'baseui/button';

export const KIND = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  minimal: 'minimal',
};

export const SHAPE = {
  default: 'default',
  round: 'round',
  square: 'square',
};

export const SIZE = {
  default: 'default',
  compact: 'compact',
};

export const RoBaseButton = styled(
  StyledBaseButton,
  ({ $theme }) => ({
    ...$theme.typography.Button,
  }),
);

const Button = ({ children, overrides, ...props }) => {
  const defaults = {
    BaseButton: RoBaseButton,
  };
  return (
    <BaseButton
      overrides={{ ...defaults, ...overrides }}
      {...props}
    >
      {children}
    </BaseButton>
  );
};

export { Button };
