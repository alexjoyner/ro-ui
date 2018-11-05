import React from 'react';
import { Atoms } from '../_atoms.stories';
import { Panel } from '../Panel';
import { Go } from '.';

Atoms
  .add('Colors', () => (
    <Go>
      <Panel>
        <h1>This entire panel should be a link!</h1>
      </Panel>
    </Go>
  ));
