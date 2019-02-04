import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { CenteredContent } from '.';
import { Panel } from '../Panel';

storiesOf('Depreciated', module)
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
      <Panel width="30%"><h3>Item</h3></Panel>
    </CenteredContent>
  ));
