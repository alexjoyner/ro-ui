import React from 'react';
import { TopBarWrapper } from './particles/TopBarWrapper';


export const TopBar = props => (
  <TopBarWrapper {...props}>
    {props.children}
  </TopBarWrapper>
);
