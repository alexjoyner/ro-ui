// @flow
import styled from 'styled-components';
import * as React from 'react';
import { getTextContrastColor } from '../utils/getBtnTextColor';
import { getBtnSizeSettings } from '../utils/getBtnSizeSettings';
import { colors } from '../../colors';

type Props = {
  color?: string,
  primary?: boolean,
  xsmall?: boolean,
  small?: boolean,
  large?: boolean,
}

export const ButtonStyles: React.ComponentType<Props> = styled.span`
    background-color: ${props => colors[props.color] || colors.primary};
    color: ${props => getTextContrastColor(colors[props.color] || colors.primary)};
    border: 1px solid ${props => colors[props.color] || colors.primary};
    display: inline-block;
    outline: none;
    cursor: pointer;
    ${props => getBtnSizeSettings(props)}; 
    text-align: center;
    line-height: 1.5;
    transition: 0.1s linear;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    svg {
      vertical-align: middle;
    }
    &:hover {
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    } 
    &:active {
      box-shadow: none;
    }
    ${props =>
    (props.ghost && `
      border-width: 1px;
      color: white;
      background-color: transparent;
    `)};
  `;

