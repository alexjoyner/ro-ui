import React from 'react';
import {TopBar} from '../../atoms/TopBar';
import {Logo} from '../../atoms/Logo';
import styled from 'styled-components';

const HeaderLogo = styled(Logo)`
    padding-left: 20px;
    color: ${props => props.fontColor || 'white'};
`

const Header = (props) => (
    <TopBar {...props}>
        <HeaderLogo {...props}></HeaderLogo>
        {props.children}
    </TopBar>
);

export {Header};
