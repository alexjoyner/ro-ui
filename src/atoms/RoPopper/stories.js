import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { RoPopper } from '.';

storiesOf('Atoms', module)
  .add('Popper', () => (
    <div>
      <RoPopper />
    </div>
  ));
