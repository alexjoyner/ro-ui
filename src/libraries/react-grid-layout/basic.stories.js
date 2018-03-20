import React from 'react';
import {Libraries} from "../_libraries.stories";
import {Panel} from "../../atoms/panel/panel";
import {BasicLayout} from "./basic";

Libraries
    .add('react-grid-layout', () => (
       <Panel>
           <h3>Example of us</h3>
            <BasicLayout></BasicLayout>
       </Panel>
    ));