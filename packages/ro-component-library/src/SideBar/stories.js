import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { SideBar, sideBarActions } from '.';
import { Button } from '../Button';

storiesOf('Atoms', module)
  .add('SideBar', () => (
    <>
      <SideBar>
        <Button onClick={() => sideBarActions().toggle()}>Open SideBar</Button>
      </SideBar>
    </>
  ));
