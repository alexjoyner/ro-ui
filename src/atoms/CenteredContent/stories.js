import React from 'react';
import { Atoms } from '../_atoms.stories';
import { CenteredContent } from '.';
import { Panel } from '../Panel';

Atoms
  .add('CenteredContent', () => (
    <CenteredContent>
      <h1>Centered Content</h1>
      <Panel width="40%"><h3>Item</h3></Panel>
      <Panel width="30%"><h3>Item</h3></Panel>
      <Panel width="10%"><h3>Item</h3></Panel>
      <Panel width="30%"><h3>Item</h3></Panel>
      <Panel width="50%"><h3>Item</h3></Panel>
      <Panel width="60%"><h3>Item</h3></Panel>
      <Panel width="30%"><h3>Item</h3></Panel>
      <Panel width="30%"><h3>Item</h3></Panel>
      <Panel width="30%"><h3>Item</h3></Panel>
      <Panel width="30%"><h3>Item</h3></Panel>
      <Panel width="30%"><h3>Item</h3></Panel>
      <Panel width="30%"><h3>Item</h3></Panel>
    </CenteredContent>
  ));
