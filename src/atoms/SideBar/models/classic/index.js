import styled from 'styled-components';
import { bool } from 'prop-types';
import { colors } from '../../../../_depreciated/colors';
import { zIndexes } from '../../../../utils/zIndexes';
import { getTextContrastColor } from '../../../../utils/getTextContrastColor';


export const BaseSideBar = styled.div`
  position: fixed;
  z-index: ${zIndexes.SideBar};
  background-color: ${colors.default};
  height: 100vh;
  width: 300px;
  background-color: ${props => colors[props.color] || colors.default};
  color: ${props => getTextContrastColor(colors[props.color] || colors.default)};
`;
export const SideBar = styled(BaseSideBar)`
  left: -250px;
`;
export const AnimatedSideBar = styled(BaseSideBar)`
  transition: 100ms linear;
  ${props => ((props.shown) ? `
    left: 0px;
  ` : 'left: -250px;')};
`;
AnimatedSideBar.propTypes = {
  shown: bool.isRequired,
};
