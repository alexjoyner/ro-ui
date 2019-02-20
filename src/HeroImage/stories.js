import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { HeroImage } from '.';
import { Button } from '../Button';

storiesOf('Molecules', module)
  .add('HeroImage', () => (
    <HeroImage imageSrc="https://placeimg.com/2100/800/any">
      <h1>Hero Image</h1>
      <Button ghost color="primary">This is awesome!</Button>
    </HeroImage>
  ));
