import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Panel } from '../Panel';
import { Go } from '.';

storiesOf('Atoms', module)
  .add('Go', () => (
    <Go to="http://www.google.com">
      <Panel>
        <h1>This entire panel should be a link to google!</h1>
      </Panel>
    </Go>
  ));
