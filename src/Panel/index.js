import React from 'react';
import { PanelContainer } from './particles/PanelContainer';

console.warn('Panel will be removed soon!');
export const Panel = ({ children, ...props }) => (
  <PanelContainer {...props}>
    {children}
  </PanelContainer>
);
