import styled from 'styled-components';
import { colors } from '../../../../atoms/colors';

export const SideBarContainer = styled.div`
  transition: 100ms linear;
  height: 100vh;
  width: 250px;
  background-color: ${colors.primary};
  color: white;
  position: fixed;
  z-index: 1000;
  top: 0;
  font-size: 20px;
  padding: 10px;
  ul{
      list-style: none;
  }
  ${props => ((props.shown) ? `
      left: 0px;
  ` : 'left: -270px;')};
`;
