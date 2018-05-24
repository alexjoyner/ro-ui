import React from 'react';
import {Molecules} from '../_molecules.stories.js';
import {Modal} from './';


Molecules
    .add('Modal', () => {
        return (
            <Modal>
                <h1>Custom Width Panel on PageOverlay</h1>
            </Modal>
        )
    })