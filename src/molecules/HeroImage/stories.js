import React from 'react';
import { Molecules } from '../_molecules.stories';
import { HeroImage } from './';
import { Button } from '../../atoms/Button';

Molecules
  .add('HeroImage', () => (
    <HeroImage>
      <h1>Hero Image</h1>
      <Button>This is awesome!</Button>
    </HeroImage>
  ));
