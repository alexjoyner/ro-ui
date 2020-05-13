import React from 'react';
import { PageOverlayWrapper } from './particles/PageOverlayWrapper';

export const Overlay = ({ children }) => (
  <PageOverlayWrapper>
    {children}
  </PageOverlayWrapper>
);
