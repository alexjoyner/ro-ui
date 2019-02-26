import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { TISideBarToggle } from '.';
import { Button } from '../../Button';

const TestToggleBtn = props => (
  <Button color="primary" {...props}>Toggle Btn</Button>
);

storiesOf('Depreciated', module)
  .add('ISideBarToggle', () => (
    <TISideBarToggle {...{
      Button: TestToggleBtn,
    }}
    />
  ));
