import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Modal } from '.';
import { ListHeader } from '../../atoms/ListHeader';
import { ListItem } from '../../atoms/ListItem';
import { Header } from '../../atoms/Header';
import { CenteredContent } from '../../_depreciated/CenteredContent';
import { TestGaugeBlock } from '../GaugeBlock/stories';
import { SideBarPage } from '../../_depreciated/SideBarPage';

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
storiesOf('Molecules', module)
  .add('Modal', () => (
    <div>
      <Header
        color="dark"
        height="67px"
        fontSize="25px"
        logoText="Dashboard Demo"
      />
      <SideBarPage sideBarContents={<SideBarList />}>
        <CenteredContent>
          <TestGaugeBlock />
        </CenteredContent>
      </SideBarPage>
      <Modal>
        <h1 style={{ color: 'white' }}>Custom Width Panel on Page Overlay</h1>
      </Modal>
    </div>
  ));
