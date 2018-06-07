import React from 'react';
import { ImageOverlayWrapper } from './particles/ImageOverlayWrapper';


export const ImageOverlay = props => (
  <ImageOverlayWrapper>
    {props.children}
  </ImageOverlayWrapper>
);
