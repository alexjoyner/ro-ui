import React from 'react';
import { Atoms } from '../_atoms.stories';
import { Panel } from '../Panel';
import { RoHighChart } from './';
import { config } from './demoData/config';

Atoms
  .add('RoHighChart', () => (
    <div>
      <Panel>
        <RoHighChart config={config} />
      </Panel>
    </div>
  ));
