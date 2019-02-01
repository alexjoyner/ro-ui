import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Logo } from '.';
import { Panel } from '../../atoms/Panel';


storiesOf('Depreciated', module)
  .add('Logo', () => (
    <div>
      <Panel>
        <Logo logoText="Voicir" />
      </Panel>
    </div>
  ));
