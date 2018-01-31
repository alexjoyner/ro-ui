import React from 'react';
import {Atoms} from "../_atoms.stories";
import {Panel} from "./panel";

Atoms
    .add('panel', () => (
        <Panel>
            <h1>Basic Panel</h1>
        </Panel>
    ));