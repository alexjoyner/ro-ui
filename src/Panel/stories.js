import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Panel } from '.';

storiesOf('Depreciated', module)
  .add('Panel', () => (
    <div>
      <Panel>
        <h1>Basic Panel</h1>
      </Panel>
      <Panel width="50%">
        <h1>Custom Width Panel</h1>
      </Panel>
    </div>
  ));
