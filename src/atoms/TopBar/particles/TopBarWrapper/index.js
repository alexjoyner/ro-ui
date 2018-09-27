// @flow
import styled from 'styled-components';
import * as React from 'react';
import { zIndexes } from '../../../../utils/zIndexes';
import { colors } from '../../../colors';
import { getTextContrastColor } from '../../../Button/utils/getTextContrastColor';

type TopBarWrapperProps = {
  sticky: boolean,
  height: string,
  color?: string,
}

export const TopBarWrapper: React.ComponentType<TopBarWrapperProps> = styled.div`
  ${props => ((props.sticky) ? `
      z-index: ${zIndexes('TopBar')};
      position: fixed;
      top: 0;
  ` : '')}
  text-align: center;
  height: ${props => props.height || '67px'};
  line-height: ${props => props.height || '67px'};
  width: 100%;
  background-color: ${props => colors[props.color] || colors.default};
  color: ${props => getTextContrastColor(colors[props.color] || colors.default)};
`;
