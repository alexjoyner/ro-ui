import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Modal } from '.';

storiesOf('Molecules', module)
  .add('Modal', () => (
    <Modal>
      {({ StyledBody }) => (
        <StyledBody>
          <h1>Custom Width Modal on Page Overlay</h1>
        </StyledBody>
      )}
    </Modal>
  ));
