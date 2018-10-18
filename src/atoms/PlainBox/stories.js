import React from 'react';
import { Atoms } from '../_atoms.stories';
import { PlainBox } from '.';
import { CenteredContent } from '../CenteredContent';

Atoms
  .add('PlainBox', () => (
    <CenteredContent>
      <PlainBox height="200px" width="25%" />
      <PlainBox height="200px" width="25%" />
      <PlainBox height="200px" width="25%" />
      <PlainBox height="200px" width="25%" />
      <PlainBox height="200px" width="25%" />
      <PlainBox height="200px" width="25%" />
      <PlainBox height="200px" width="25%" />
      <PlainBox height="200px" width="25%" />
    </CenteredContent>
  ));

