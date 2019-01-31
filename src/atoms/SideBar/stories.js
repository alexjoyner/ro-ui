import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { BasicSideBar } from '.';

export const SideBars = storiesOf('Atoms/Sidebar', module);

SideBars.add('Basic SideBar', () => <BasicSideBar />);
