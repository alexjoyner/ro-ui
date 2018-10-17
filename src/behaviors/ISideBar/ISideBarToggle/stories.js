import React from 'react';
import { Behaviors } from '../../_behaviors.stories';
import { ISideBarToggle } from '.';
import { Button } from '../../../atoms/Button';

const TestToggleBtn = props => (
  <Button color="primary" {...props}>
    Toggle Btn
  </Button>
);

Behaviors.add('ISideBarToggle', () => (
  <ISideBarToggle {...{
    Button: TestToggleBtn,
  }}
  />
));
