import React from 'react';
import { SideBarPage } from './';
import { Molecules } from '../_molecules.stories';
import { Header } from '../../atoms/Header';
import { TestGaugeBlock } from '../GaugeBlock/stories';
import { CenteredContent } from '../../atoms/CenteredContent';
import { ListItem } from '../../atoms/ListItem';
import { ListHeader } from '../../atoms/ListHeader';


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
  .add('SideBar', () => (
    <div>
      <Header color="dark">
        Dashboard Demo
      </Header>
      <SideBarPage sideBarContents={<SideBarList />} >
        <CenteredContent>
          <TestGaugeBlock />
        </CenteredContent>
      </SideBarPage>
    </div>
  ));
