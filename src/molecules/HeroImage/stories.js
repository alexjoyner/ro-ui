import React from 'react';
import { Molecules } from '../_molecules.stories';
import { HeroImage } from '.';
import { Button } from '../../atoms/Button';

Molecules
  .add('HeroImage', () => (
    <HeroImage imageSrc="https://placeimg.com/2100/800/any">
      <h1>Hero Image</h1>
      <Button ghost color="primary">This is awesome!</Button>
    </HeroImage>
  ));
