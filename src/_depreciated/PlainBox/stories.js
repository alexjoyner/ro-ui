import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { PlainBox } from '.';
import { CenteredContent } from '../CenteredContent';

storiesOf('Depreciated', module)
  .add('PlainBox', () => (
    <CenteredContent>
      <PlainBox height="200px" width="25%" />
      <PlainBox height="200px" width="25%" />
      <PlainBox height="200px" width="25%" />
      <PlainBox height="200px" width="25%" />
      <PlainBox height="200px" width="25%" />
      <PlainBox height="200px" width="25%" />
      <PlainBox height="200px" width="25%" />
      <PlainBox height="200px" width="25%" />
    </CenteredContent>
  ));
