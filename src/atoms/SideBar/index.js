import styled from 'styled-components';
import { colors } from '../colors';
import { zIndexes } from '../../utils/zIndexes';

const SideBar = styled.div`
  position: fixed;
  z-index: ${zIndexes.SideBar};
  background-color: ${colors.default};
  height: 100vh;
  width: 300px;
  left: 0px;
`;
export const BasicSidebar = styled(SideBar)`

`;

export default SideBar;
// z-index: ${zIndexes('SideBar')};
// top: 56px;
// transition: 100ms linear;
// height: 100vh;
// width: 300px;
// background-color: ${props => props.color || colors.dark};
// color: white;
// font-size: 20px;
// ul{
//     list-style: none;
// }
// ${props => ((props.shown) ? `
//     left: 0px;
// ` : 'left: -250px;')};
