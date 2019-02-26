import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { SideBarPage } from '.';
import { Header } from '../Header';
import { TestGaugeBlock } from '../GaugeBlock/stories';
import { CenteredContent } from '../CenteredContent';
import { ListItem } from '../ListItem';
import { ListHeader } from '../ListHeader';


const SideBarList = () => (
  <div>
    <ListHeader>Rooms</ListHeader>
    <CenteredContent>
      <ListItem>Upper Compressor Room</ListItem>
      <ListItem>Lower Compressor Room</ListItem>
      <ListItem>NAC Line</ListItem>
      <ListItem>APPLE Line</ListItem>
    </CenteredContent>
  </div>
);
storiesOf('Depreciated', module)
  .add('SideBar', () => (
    <div>
      <Header color="dark">
        <h1>Dashboard Demo</h1>
      </Header>
      <SideBarPage sideBarContents={<SideBarList />}>
        <CenteredContent>
          <TestGaugeBlock />
        </CenteredContent>
      </SideBarPage>
    </div>
  ));
