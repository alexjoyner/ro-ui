import styled from 'styled-components';
import { getTextContrastColor } from '../../../../utils/getTextContrastColor';
import { colors } from '../../../../colors';
import { btnSizes } from '../utils/btnSizes';

export const ButtonStyles = styled.span`
  background-color: ${props => colors[props.color] || colors.default};
  color: ${props => getTextContrastColor(colors[props.color] || colors.default)};
  border: 1px solid ${props => colors[props.color] || colors.default};
  display: inline-block;
  outline: none;
  cursor: pointer;
  ${props => btnSizes[props.size] || btnSizes.default}; 
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
  ${props => (props.ghost && `
    border-width: 1px;
    color: white;
    background-color: transparent;
  `)};
`;
