import React from 'react';
import { Atoms } from '../_atoms.stories';
import { ImageOverlay } from '.';
import { HeroImage } from '../../molecules/HeroImage';
import { Button } from '../Button';

Atoms
  .add('ImageOverlay', () => (
    <HeroImage imageSrc="https://placeimg.com/1000/800/any">
      <ImageOverlay>
        <Button color="primary" ghost>Test Button</Button>
      </ImageOverlay>
    </HeroImage>
  ));
