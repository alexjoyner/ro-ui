import React from 'react';
import {Atoms} from "../_atoms.stories";
import {Input} from "./inputs";
import {Panel} from "../panel/panel";
import './inputs.sass'

Atoms
    .add('inputs', () => {
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