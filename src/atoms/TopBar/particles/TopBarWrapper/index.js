// @flow
import styled from 'styled-components';
import * as React from 'react';

type TopBarWrapperProps = {
  sticky: boolean,
  height: string,
  color?: string,
}

export const TopBarWrapper: React.ComponentType<TopBarWrapperProps> = styled.div`
  ${props => ((props.sticky) ? `
      z-index: 200;
      position: fixed;
      top: 0;
  ` : '')}
  text-align: center;
  height: ${props => props.height};
  line-height: ${props => props.height};
  width: 100%;
  background-color: ${props => props.color};
`;
