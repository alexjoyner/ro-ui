import React from 'react';
import {Atoms} from "../_atoms.stories";
import {Panel} from "./";

Atoms
    .add('Panel', () => (
        <div>
            <Panel>
                <h1>Basic Panel</h1>
            </Panel>
            <Panel width={'50%'}>
                <h1>Custom Width Panel</h1>
            </Panel>
        </div>
    ));