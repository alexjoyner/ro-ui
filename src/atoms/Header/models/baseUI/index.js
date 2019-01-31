import React from 'react';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';

const parts = {
  HeaderNavigation,
  ALIGN,
  NavigationItem,
  NavigationList,
};

const Header = ({ children, ...props }) => (
  <HeaderNavigation {...props}>
    {children(parts)}
  </HeaderNavigation>
);

export { Header };
