import React from 'react';
import { OverlayWrapper } from './particles/OverlayWrapper';


export const Overlay = ({ children }) => (
  <OverlayWrapper>
    {children}
  </OverlayWrapper>
);
