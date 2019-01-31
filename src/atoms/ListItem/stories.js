import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { ListItem } from '.';
import { colors } from '../../_depreciated/colors';


storiesOf('Atoms', module)
  .add('ListItem', () => (
    <ul>
      <ListItem color={colors.primaryLight}>Test Item</ListItem>
    </ul>
  ));
