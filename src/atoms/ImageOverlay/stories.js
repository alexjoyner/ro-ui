import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { ImageOverlay } from '.';
import { HeroImage } from '../../molecules/HeroImage';
import { Button } from '../Button';

storiesOf('Atoms', module)
  .add('ImageOverlay', () => (
    <HeroImage imageSrc="https://placeimg.com/2000/800/any">
      <ImageOverlay>
        <Button color="primary" ghost>Test Button</Button>
      </ImageOverlay>
    </HeroImage>
  ));
