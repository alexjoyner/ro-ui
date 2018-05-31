import React, {Component} from 'react';
import {Panel} from '../../atoms/Panel';
import {Gauge} from '../../atoms/Gauge';
import {gaugeSettings} from '../../atoms/Graph/graph-settings/gauge';
import styled from 'styled-components';
import {CenteredContent} from '../../atoms/CenteredContent';
const GraphBlockLabel = styled.div`
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`
const GaugeBlock = (props) => (
    <Panel width={'25%'}>
        <Gauge
            {...props}/>
        <GraphBlockLabel>{props.label}</GraphBlockLabel>
    </Panel>
);


export {GaugeBlock};
