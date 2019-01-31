import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { PageOverlay } from '.';
import { Panel } from '../Panel';

storiesOf('Atoms', module)
  .add('PageOverlay', () => (
    <PageOverlay>
      <Panel width="50%">
        <h1 style={{ color: 'white' }}>Custom Width Panel on PageOverlay</h1>
      </Panel>
    </PageOverlay>
  ));
