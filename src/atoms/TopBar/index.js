import React, {Component} from 'react';
import styled from 'styled-components';


const TopBarWrapper = styled.div`
    ${(props) => (props.sticky)?`
        position: fixed;
        top: 0;
    `:''}
    height: ${props => props.height};
    line-height: ${props => props.height};
    width: 100%;
    background-color: ${props => props.color};
`

export const TopBar = (props) => (
    <TopBarWrapper {...props}>
        {props.children}
    </TopBarWrapper>
)