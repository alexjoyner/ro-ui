import React from 'react';
import { ISideBarBehavior } from '../stories';
import { TISideBarToggle } from '.';
import { Button } from '../../../atoms/Button';

const TestToggleBtn = props => (
  <Button color="primary" {...props}>Toggle Btn</Button>
);

ISideBarBehavior.add('ISideBarToggle', () => (
  <TISideBarToggle {...{
    Button: TestToggleBtn,
  }}
  />
));
