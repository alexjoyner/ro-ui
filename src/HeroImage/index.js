import React from 'react';
import { Overlay } from '../Overlay';
import { Wrapper } from './particles/Wrapper';
import { HeroImageContent } from './particles/HeroImageContent';

// The hero image is a molecule because it combines
//  the image overlay
export const HeroImage = ({ children, ...props }) => (
  <Wrapper {...props}>
    <Overlay>
      <HeroImageContent>
        {children}
      </HeroImageContent>
    </Overlay>
  </Wrapper>
);
