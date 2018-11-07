import React from 'react';
import { Atoms } from '../_atoms.stories';
import { Panel } from '../Panel';
import { Go } from '.';

Atoms
  .add('Go', () => (
    <Go to="http://www.google.com">
      <Panel>
        <h1>This entire panel should be a link to google!</h1>
      </Panel>
    </Go>
  ));
