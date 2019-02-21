import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import {
  ModalStateContainer,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
} from '.';
import { Button } from '../Button';

const exampleText = `
Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare 
faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut tempus.
`;

storiesOf('Molecules', module)
  .add('Modal', () => (
    <ModalStateContainer>
      {({ open, close, isOpen }) => (
        <>
          <Button onClick={open}>Open Modal</Button>
          <Modal onClose={close} isOpen={isOpen}>
            <ModalHeader>Hello world</ModalHeader>
            <ModalBody>
              <span>{exampleText}</span>
            </ModalBody>
            <ModalFooter>
              <ModalButton onClick={close}>Cancel</ModalButton>
              <ModalButton onClick={close}>Okay</ModalButton>
            </ModalFooter>
          </Modal>
        </>
      )}
    </ModalStateContainer>
  ));
