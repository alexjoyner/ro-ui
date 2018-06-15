import styled from 'styled-components';
import { colors } from '../../../../atoms/colors';

export const SideBarContainer = styled.div`
  position: fixed;
  z-index: 300;
  top: 67px;
  transition: 100ms linear;
  height: 100vh;
  width: 300px;
  background-color: ${props => props.color || colors.dark};
  color: white;
  font-size: 20px;
  ul{
      list-style: none;
  }
  ${props => ((props.shown) ? `
      left: 0px;
  ` : 'left: -250px;')};
`;
