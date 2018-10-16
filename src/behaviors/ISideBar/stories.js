import React from 'react';
import { Behaviors } from '../_behaviors.stories';
import { ISideBar } from '.';
import { BasicSidebar } from '../../atoms/SideBar';
import BasicSideBarPageBody from '../../atoms/SideBar/SideBarPageBody';
import { Button } from '../../atoms/Button';

const SideBarBody = () => (
  <BasicSideBarPageBody >
    <Button>
      Toggle Side Bar
    </Button>
  </BasicSideBarPageBody>
);
Behaviors.add('ISidebar', () => (
  <ISideBar {...{
    shown: true,
    SideBar: BasicSidebar,
    Body: SideBarBody,
  }}
  />
));
