import React from 'react';
import { Behaviors } from '../_behaviors.stories';
import { ISideBar } from '.';

const TestSideBar = () => (
  <h1>Hello World</h1>
);
TestSideBar.displayName = 'SideBar';

const opts = {
  SideBar: TestSideBar,
};

Behaviors.add('ISidebar', () => (
  <ISideBar {...opts} />
));
