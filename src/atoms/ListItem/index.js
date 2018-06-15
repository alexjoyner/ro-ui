import styled from 'styled-components';
import { colors } from '../colors';

export const ListItem = styled.div`
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box; 
  width: 90%;
  margin-top: 5px;
  padding: 10px;
  border-radius: 2px;
  border: none;
  background-color: ${props => props.color || colors.darkLight};
  display: inline-block;
`;
