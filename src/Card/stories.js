import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Card, StyledBody } from '.';

const CardExample = () => (
  <>
    <Card title="Example Card">
      <StyledBody>
        Hello World
      </StyledBody>
    </Card>
  </>
);

storiesOf('Atoms', module)
  .add('Card', () => <CardExample />);
