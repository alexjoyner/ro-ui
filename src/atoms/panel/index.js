import React from 'react';
import { PanelContainer } from './particles/PanelContainer';

export const Panel = ({ children, ...props }) => (
  <PanelContainer {...props}>
    {children}
  </PanelContainer>
);
