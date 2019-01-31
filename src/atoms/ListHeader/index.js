import styled from 'styled-components';
import { colors } from '../../_depreciated/colors';
import { getTextContrastColor } from '../../utils/getTextContrastColor';

export const ListHeader = styled.div`
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box; 
  top: 0;
  left: 0;
  background-color: ${props => colors[props.color] || colors.darkLight};
  color: ${props => getTextContrastColor(colors[props.color] || colors.darkLight)};
  border: none;
  width: 100%;
  height: 41px;
  line-height: 41px;
  vertical-align: middle;
  padding-left: 10px;
`;
