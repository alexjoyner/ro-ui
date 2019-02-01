import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { SideBar, sideBarActions } from './models/basic';
import { Button } from '../Button';

storiesOf('Atoms', module)
  .add('SideBar', () => (
    <>
      <SideBar
        sidebar={<Button onClick={() => sideBarActions.toggle()}>Open SideBar</Button>}
        styles={{ sidebar: { background: 'white' } }}
      >
        <Button onClick={() => sideBarActions.toggle()}>Open SideBar</Button>
      </SideBar>
    </>
  ));
