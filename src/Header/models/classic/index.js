import React from 'react';
import { HeaderContainer } from './particles/HeaderContainer';
import { HeaderContentsWrapper } from './particles/HeaderContentsWrapper';
import { HeaderItem } from './HeaderItem';

const supplies = { HeaderItem };

const Header = ({ children, ...props }) => {
  if (typeof children !== 'function') {
    return (
      <HeaderContainer {...props}>
        <HeaderContentsWrapper>
          {children}
        </HeaderContentsWrapper>
      </HeaderContainer>
    );
  }
  return (
    <HeaderContainer {...props}>
      <HeaderContentsWrapper>
        {children(supplies)}
      </HeaderContentsWrapper>
    </HeaderContainer>
  );
};

export { Header };
