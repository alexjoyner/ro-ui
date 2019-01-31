import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Overlay } from '.';
import { HeroImage } from '../../molecules/HeroImage';
import { Button } from '../Button';

storiesOf('Atoms', module)
  .add('Overlay', () => (
    <HeroImage imageSrc="https://placeimg.com/2000/800/any">
      <Overlay>
        <Button color="primary" ghost>Test Button</Button>
      </Overlay>
    </HeroImage>
  ));
