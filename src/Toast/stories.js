import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Toast, toaster } from '.';
import { Button } from '../Button';
import { Card } from '../Card';

const ToasterExample = () => {
  const newToast = () => {
    toaster().info(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. ${Math.floor((Math.random() * 100) + 1)}`, {
      autoHideDuration: 0,
    });
  };
  return (
    <Button onClick={newToast}>Info toast</Button>
  );
};

const ToastExample = () => (
  <Card>
    {({ StyledBody }) => (
      <StyledBody>
        <h1>Toast Example:</h1>
        <Toast />
        <ToasterExample />
      </StyledBody>
    )}
  </Card>
);

storiesOf('Atoms', module)
  .add('Toast', () => <ToastExample />);
