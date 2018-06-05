import React from 'react';
import styled from 'styled-components';

const PanelContainer = styled.div`
    ${props => (props.width ? `
        display: inline-block;
        width: ${props.width};
    ` : `
        display: block;
    `)}
    min-width: ${props => props.minWidth || '280px'};
    margin: 10px;
    padding: 10px;
    background-color: #fafafa;
    border: 1px solid #EEEEEE;
    radius: 5px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16);
`;
export const Panel = props => (
  <PanelContainer {...props}>
    {props.children}
  </PanelContainer>
);

