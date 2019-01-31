import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Panel } from '../Panel';
import { RoHighChart } from '.';
import { config } from './demoData/config';

storiesOf('Atoms', module)
  .add('RoHighChart', () => (
    <div>
      <Panel>
        <RoHighChart config={config} />
      </Panel>
    </div>
  ));
