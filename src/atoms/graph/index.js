import React, {Component} from 'react';
import 'c3/c3.css';
import {ErrorBoundary} from "../../utils/error-boundary";
//let connect;
let c3;
if(typeof window !== 'undefined'){
    //connect = require("../socket-connection/connection").connect;
    require('d3');
    c3 = require('c3');
}

export class Graph extends Component {
    chart = {};
    componentDidMount() {
        this.initChart();
    }
    shouldComponentUpdate(nextProps) {
        this.chart.load({
            columns: [['Data', nextProps.value]],
        });
        return false;
    }
    initChart() {
        this.chart = c3.generate({
            bindto: `#${this.props.chartID}`,
            data: {
                type: 'gauge',
                columns: [['Data', 0]],
            },
            ...this.props.chartOpts,
        });
    }
    render() {
        return (
            <ErrorBoundary>
                <div id={this.props.chartID} />
            </ErrorBoundary>
        );
    }
}