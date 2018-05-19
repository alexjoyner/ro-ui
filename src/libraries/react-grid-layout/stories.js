import React from 'react';
import {Libraries} from "../_libraries.stories";
import {Panel} from "../../atoms/panel";
import {BasicLayout} from "./";
import _ from 'lodash';
import {gaugeSettings} from "../../atoms/graph/graph-settings/gauge";
import {Graph} from "../../atoms/graph";

let TestColorBox = (props) => (
    <div style={{
        'display': 'inline-clock',
        'height': '100px',
        'wight': '100px',
        'backgroundColor': props.color 
    }}/>
);

let generateDOM = () => {
    return _.map(_.range(10), function(i) {
        return (
            <TestColorBox key={i} color={"#eee"}>
            </TestColorBox>
        );
    });
};
Libraries
    .add('react-grid-layout', () => (
        <div>
            <Panel>
                <h3>Example of us</h3>
                <BasicLayout>
                    {generateDOM()}
                </BasicLayout>
            </Panel>
            <Panel>
                <h3>Example with a grid</h3>
                <BasicLayout>
                    <Graph chartID={'gauge-1'} chartOpts={gaugeSettings} />
                </BasicLayout>
            </Panel>
        </div>
    ));