import { storiesOf } from '@storybook/react/dist/client/preview';
import React from 'react';
import BasicSideBarPageBody, { HeaderSideBarPageBody } from '.';

export const SideBarPageBodys = storiesOf('Atoms/Sidebar/SideBarPageBody', module);
SideBarPageBodys.add('Basic SideBarPageBody', () => (
  <BasicSideBarPageBody><h1>Hello World</h1></BasicSideBarPageBody>
));
SideBarPageBodys.add('Header SideBarPageBody', () => (
  <HeaderSideBarPageBody><h1>Hello World</h1></HeaderSideBarPageBody>
));
