// @flow
import styled from 'styled-components';
import * as React from 'react';

type HeaderContentsWrapperProps = {
  sticky: boolean,
  padding: string,
  color?: string,
}

export const HeaderContentsWrapper: React.ComponentType<HeaderContentsWrapperProps> = styled.div`
    height: 56px;
    padding: 0 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
