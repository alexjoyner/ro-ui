import React, {Component} from 'react';
import {Panel} from '../../atoms/Panel';
import {Graph} from '../../atoms/Graph';
import {gaugeSettings} from '../../atoms/Graph/graph-settings/gauge';
import styled from 'styled-components';
import {CenteredContent} from '../../atoms/CenteredContent';
const GraphBlockLabel = styled.div`
    font-size: 25px;
    text-align: center;
`

const GaugeBlock = (props) => (
    <Panel width={'330px'}>
        <Graph
            {...props}
            chartID={'gauge-' + props.id}
            chartOpts={props.gaugeOpts}/>
        <GraphBlockLabel>{props.label}</GraphBlockLabel>
    </Panel>
);


export {GaugeBlock};
