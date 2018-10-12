import React from 'react';
import { Atoms } from '../_atoms.stories';
import { Header } from './';

Atoms
  .add('Header', () => (
    <div>
      <Header color="primary" >
        Hello World!
      </Header>
    </div>
  ));
