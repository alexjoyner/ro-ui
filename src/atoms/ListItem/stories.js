import React from 'react';
import { ListItem } from '.';
import { Atoms } from '../_atoms.stories';
import { colors } from '../colors';


Atoms
  .add('ListItem', () => (
    <ul>
      <ListItem color={colors.primaryLight}>Test Item</ListItem>
    </ul>
  ));
