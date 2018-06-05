import React from 'react';
import styled from 'styled-components';
import { TopBar } from '../../atoms/TopBar';
import { Logo } from '../../atoms/Logo';

const HeaderLogo = styled(Logo)`
    padding-left: 20px;
    color: ${props => props.fontColor || 'white'};
`;

const Header = props => (
  <TopBar {...props}>
    <HeaderLogo {...props} />
    {props.children}
  </TopBar>
);

export { Header };

