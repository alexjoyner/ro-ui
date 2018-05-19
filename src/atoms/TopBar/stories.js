import React from 'react';
import {Atoms} from '../_atoms.stories';
import {TopBar} from './';

Atoms
    .add('top-bar', () => (
        <TopBar height={'100px'} color={'#DDDDDD'}></TopBar>
    ))