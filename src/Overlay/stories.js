import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Overlay } from '.';
import { HeroImage } from '../HeroImage';
import { Button } from '../Button';

storiesOf('Atoms', module)
  .add('Overlay', () => (
    <HeroImage imageSrc="https://placeimg.com/2000/800/any">
      <Overlay>
        <Button kind="secondary">Test Button</Button>
      </Overlay>
    </HeroImage>
  ));
