import React from 'react';
import { Molecules } from '../_molecules.stories';
import { Modal } from './';


Molecules
  .add('Modal', () => (
    <Modal>
      <h1>Custom Width Panel on PageOverlay</h1>
    </Modal>
  ));
