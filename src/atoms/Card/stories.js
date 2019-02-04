import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Card } from '.';

const CardExample = () => (
  <>
    <h1>Card Example:</h1>
    <Card>
      {({ StyledBody }) => (
        <StyledBody>
          Hello World
        </StyledBody>
      )}
    </Card>
  </>
);

storiesOf('Atoms', module)
  .add('Card', () => <CardExample />);
