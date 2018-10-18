import React from 'react';
import { ISideBar } from '../stories';
import { _ISideBarToggle } from '.';
import { Button } from '../../../atoms/Button';

const TestToggleBtn = props => (
  <Button color="primary" {...props}>
    Toggle Btn
  </Button>
);

ISideBar.add('ISideBarToggle', () => (
  <_ISideBarToggle {...{
    Button: TestToggleBtn,
  }}
  />
));
