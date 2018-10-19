import styled from 'styled-components';
import { bool } from 'prop-types';
import { colors } from '../colors';
import { zIndexes } from '../../utils/zIndexes';

export const BasicSideBar = styled.div`
  position: fixed;
  z-index: ${zIndexes.SideBar};
  background-color: ${colors.default};
  height: 100vh;
  width: 300px;
  left: -250px;
`;
BasicSideBar.propTypes = {
  shown: bool.isRequired,
};
export const AnimatedSideBar = styled(BasicSideBar)`
  transition: 100ms linear;
`;
// background-color: ${props => props.color || colors.dark};
// color: white;
// font-size: 20px;
// ul{
//     list-style: none;
// }
// ${props => ((props.shown) ? `
//     left: 0px;
// ` : 'left: -250px;')};
