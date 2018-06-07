import React from 'react';
import { PageOverlayWrapper } from './particles/PageOverlayWrapper';

export const PageOverlay = props => (
  <PageOverlayWrapper>
    {props.children}
  </PageOverlayWrapper>
);
