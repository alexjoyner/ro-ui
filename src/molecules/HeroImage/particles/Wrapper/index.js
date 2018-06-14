// @flow
import * as React from 'react';
import styled from 'styled-components';

type WrapperProps = {
  height?: string,
  imageSrc: string,
}

const Wrapper: React.ComponentType<WrapperProps> = styled.div`
  background-size: cover;
  background-image: ${props => ((props.imageSrc) ? `url(${props.imageSrc})` : null)};
  height: ${props => props.height || '100vh'};
`;

export { Wrapper };
