import React from 'react';
import styled from 'styled-components';


export const PlainBox = styled.div`
    ${props => (props.height || props.width)?`
        height: ${props.height};
        width: ${props.width};
    `:`
        height: 100px;
        width: 100px;
    `}
    ${props => (props.margin)?`
        margin: ${props.margin};
    `:`
        margin: 10px;
    `}
    background-color: #c0c0c0;
`