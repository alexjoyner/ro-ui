import React, {Component} from 'react';
import styled from 'styled-components';


const TopBarWrapper = styled.div`
    height: ${props => props.height};
    width: 100%;
    background-color: ${props => props.color};
`

export const TopBar = (props) => (
    <TopBarWrapper {...props}>
        {props.children}
    </TopBarWrapper>
)