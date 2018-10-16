import { storiesOf } from '@storybook/react/dist/client/preview';
import React from 'react';
import { BasicSidebar } from '.';

export const SideBars = storiesOf('Atoms/Sidebar', module);

SideBars.add('Basic SideBar', () => <BasicSidebar />);
