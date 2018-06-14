import React from 'react';
import { TopBar } from '../../atoms/TopBar';
import { HeaderLogo } from './particles/HeaderLogo';


const Header = props => (
  <TopBar {...props}>
    <HeaderLogo {...props} />
    {props.children}
  </TopBar>
);

export { Header };

