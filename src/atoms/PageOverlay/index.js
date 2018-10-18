import React from 'react';
import { PageOverlayWrapper } from './particles/PageOverlayWrapper';

export const PageOverlay = ({ children }) => (
  <PageOverlayWrapper>
    {children}
  </PageOverlayWrapper>
);
