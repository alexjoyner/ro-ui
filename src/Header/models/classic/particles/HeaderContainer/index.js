import styled from 'styled-components';
import { zIndexes } from '../../../../../utils/zIndexes';
import { colors } from '../../../../../colors';
import { getTextContrastColor } from '../../../../../utils/getTextContrastColor';

const HeaderContainer = styled.div`
  z-index: ${zIndexes.Header};
  position: fixed;
  left: 0;
  top: 0;
  height: 56px;
  width: 100%;
  background-color: ${props => colors[props.color] || colors.default};
  color: ${props => getTextContrastColor(colors[props.color] || colors.default)};
`;
HeaderContainer.displayName = 'HeaderContainer';
export { HeaderContainer };
