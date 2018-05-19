import React from 'react';
import {Atoms} from "../_atoms.stories";
import {Input} from "./";
import {Panel} from "../Panel";
Atoms
    .add('Input', () => {
        return (
            <div>
                <Panel>
                    <Input type={'text'} placeholder={'Text Input'}/>
                </Panel>
                <Panel>
                    <Input type={'email'} placeholder={'Email Input'}/>
                </Panel>
            </div>
        )
    });