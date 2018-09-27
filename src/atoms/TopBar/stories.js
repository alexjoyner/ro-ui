import React from 'react';
import { Atoms } from '../_atoms.stories';
import { TopBar } from './';

Atoms
  .add('TopBar', () => (
    <div>
      <TopBar height="75px" color="primary" >
        <h1>Hello World!</h1>
      </TopBar>
    </div>
  ));
