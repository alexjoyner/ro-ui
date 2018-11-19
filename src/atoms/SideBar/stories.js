import { storiesOf } from '@storybook/react/dist/client/preview';
import React from 'react';
import { BasicSideBar } from '.';

export const SideBars = storiesOf('Atoms/Sidebar', module);

SideBars.add('Basic SideBar', () => <BasicSideBar />);
