import React from 'react';
import { Atoms } from '../_atoms.stories';
import { Panel } from '../Panel';
import { RoHighChart } from './';

Atoms
  .add('RoHighChart', () => (
    <div>
      <Panel>
        <RoHighChart />
      </Panel>
    </div>
  ));
