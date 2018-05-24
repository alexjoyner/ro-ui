import React from 'react';
import {Atoms} from "../_atoms.stories";
import {PlainBox} from "./";

Atoms
    .add('PlainBox', () => (
        <div>
            <PlainBox height={'100px'} width={'300px'}/>
        </div>
    ));