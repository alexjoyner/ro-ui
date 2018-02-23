import React from 'react';
import {Atoms} from "../_atoms.stories";
import {Graph} from "./index";
import {Panel} from "../panel/panel";


const BlockID = 1;
const chartOptions = {
    gauge: {
        label: {
            format: value => `${value}°F`,
        },
    },
    color: {
        pattern: ['#50bcef', '#F6C600', '#4eac5b', '#FF0000'], // the three color levels for the percentage values.
        threshold: {
            values: [30, 70, 78, 100],
        },
    },
};

Atoms
    .add('graph', () => {
       return (
           <Panel>
               <Graph
                   chartID={'gauge-' + BlockID}
                   chartOpts={chartOptions}/>
           </Panel>
       )
    });