import React from 'react';
import styled from 'styled-components';
import { colors } from '../colors';
import { getTextContrastColor } from '../../utils/getTextContrastColor';

const ListItemContainer = styled.div`
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box; 
  width: 90%;
  margin-top: 5px;
  padding: 10px;
  border-radius: 2px;
  border: none;
  background-color: ${props => colors[props.color] || colors.darkLight};
  color: ${props => getTextContrastColor(colors[props.color] || colors.darkLight)}
  display: inline-block;
  cursor: pointer;
  opacity: 1;
  &:hover {
    opacity: 0.95;
  } 
  &:active {
    box-shadow: none;
    opacity: 0.85;
  }
`;

export const ListItem = props => (
  <ListItemContainer {...props} />
);
