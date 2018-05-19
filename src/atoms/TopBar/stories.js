import React from 'react';
import {Atoms} from '../_atoms.stories';
import {TopBar} from './';
import {colors} from '../colors';
Atoms
    .add('TopBar', () => (
        <div>
            <TopBar height={'75px'} color={colors.primary}></TopBar>
        </div>
    ))