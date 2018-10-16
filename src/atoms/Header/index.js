import React from 'react';
import { HeaderContainer } from './particles/HeaderContainer';
import { HeaderContentsWrapper } from './particles/HeaderContentsWrapper';


export const Header = props => (
  <HeaderContainer {...props}>
    <HeaderContentsWrapper>
      {props.children}
    </HeaderContentsWrapper>
  </HeaderContainer>
);
