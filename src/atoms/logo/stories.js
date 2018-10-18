import React from 'react';
import { Logo } from '.';
import { Panel } from '../Panel';
import { Atoms } from '../_atoms.stories';


Atoms
  .add('Logo', () => (
    <div>
      <Panel>
        <Logo logoText="Voicir" />
      </Panel>
    </div>
  ));
