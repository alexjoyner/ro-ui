// @flow
import styled from 'styled-components';
import * as React from 'react';
import { zIndexes } from '../../../../utils/zIndexes';
import { colors } from '../../../colors';
import { getTextContrastColor } from '../../../../utils/getTextContrastColor';

type HeaderContainerProps = {
  sticky: boolean,
  padding: string,
  color?: string,
}

export const HeaderContainer: React.ComponentType<HeaderContainerProps> = styled.div`
  z-index: ${zIndexes.Header};
  position: fixed;
  top: 0;
  padding: 0 5%;
  height: 56px;
  width: 100%;
  background-color: ${props => colors[props.color] || colors.default};
  color: ${props => getTextContrastColor(colors[props.color] || colors.default)};
`;
