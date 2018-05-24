import React from 'react';
import {Atoms} from "../_atoms.stories";
import {PageOverlay} from "./";
import {HeroImage} from "../../molecules/HeroImage";
import {Panel} from '../Panel'
Atoms
    .add('PageOverlay', () => (
        <PageOverlay>
            <Panel width={'500px'}>
                <h1>Custom Width Panel on PageOverlay</h1>
            </Panel>
        </PageOverlay>
    ));