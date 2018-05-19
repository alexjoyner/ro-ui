import React from 'react';
import {Atoms} from '../_atoms.stories.js';
import {CenteredContent} from './';
import {Panel} from '../Panel';

Atoms
    .add('CenteredContent', () => {
        return (
            <CenteredContent>
                <Panel width={'300px'}><h3>Item</h3></Panel>
                <Panel width={'300px'}><h3>Item</h3></Panel>
                <Panel width={'300px'}><h3>Item</h3></Panel>
                <Panel width={'300px'}><h3>Item</h3></Panel>
                <Panel width={'300px'}><h3>Item</h3></Panel>
                <Panel width={'300px'}><h3>Item</h3></Panel>
                <Panel width={'300px'}><h3>Item</h3></Panel>
                <Panel width={'300px'}><h3>Item</h3></Panel>
                <Panel width={'300px'}><h3>Item</h3></Panel>
                <Panel width={'300px'}><h3>Item</h3></Panel>
                <Panel width={'300px'}><h3>Item</h3></Panel>
                <Panel width={'300px'}><h3>Item</h3></Panel>
            </CenteredContent>
        )
    })