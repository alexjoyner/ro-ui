import React from 'react';
import { Molecules } from '../_molecules.stories';
import { Modal } from '.';
import { ListHeader } from '../../atoms/ListHeader';
import { ListItem } from '../../atoms/ListItem';
import { Header } from '../../atoms/Header';
import { CenteredContent } from '../../atoms/CenteredContent';
import { TestGaugeBlock } from '../GaugeBlock/stories';
import { SideBarPage } from '../SideBarPage';

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
Molecules
  .add('Modal', () => (
    <div>
      <Header
        color="dark"
        height="67px"
        fontSize="25px"
        logoText="Dashboard Demo"
      />
      <SideBarPage sideBarContents={<SideBarList />} >
        <CenteredContent>
          <TestGaugeBlock />
        </CenteredContent>
      </SideBarPage>
      <Modal>
        <h1>Custom Width Panel on PageOverlay</h1>
      </Modal>
    </div>
  ));
