import styled from 'styled-components';
import { colors } from '../../../../atoms/colors';

export const SideBarContainer = styled.div`
  position: fixed;
  top: 0;
  transition: 100ms linear;
  height: 100vh;
  width: 280px;
  background-color: ${colors.primary};
  color: white;
  font-size: 20px;
  padding: 10px;
  ul{
      list-style: none;
  }
  ${props => ((props.shown) ? `
      left: 0px;
  ` : 'left: -300px;')};
`;
