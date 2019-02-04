import React from 'react';
import {
  Card as BaseUICard, StyledBody, StyledAction, StyledThumbnail,
} from 'baseui/card';

const Options = {
  StyledBody,
  StyledAction,
  StyledThumbnail,
};

const Card = ({ children, ...rest }) => (
  <BaseUICard {...rest}>
    {children(Options)}
  </BaseUICard>
);

export { Card };
