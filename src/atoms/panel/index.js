import React from 'react';
import { PanelContainer } from './particles/PanelContainer';

export const Panel = props => (
  <PanelContainer {...props}>
    {props.children}
  </PanelContainer>
);

