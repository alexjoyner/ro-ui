import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Panel } from '../../_depreciated/Panel';
import { Chart } from '.';
import { config } from './demoData/config';

storiesOf('Atoms', module)
  .add('Chart', () => (
    <div>
      <Panel>
        <Chart config={config} />
      </Panel>
    </div>
  ));
