import React from 'react';
import { HeaderContainer } from './particles/HeaderContainer';
import { HeaderContentsWrapper } from './particles/HeaderContentsWrapper';


export const Header = ({ children, ...props }) => (
  <HeaderContainer {...props}>
    <HeaderContentsWrapper>
      {children}
    </HeaderContentsWrapper>
  </HeaderContainer>
);
