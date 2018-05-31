import React, {Component} from 'react';
import {Atoms} from "../_atoms.stories";
import {Panel} from "../../atoms/Panel";
import {Gauge} from "./";
import {Grid} from "../../atoms/Grid";


class TestGauge extends Component{
    state = {
        value: 20,
        radius: 120.5,
        center: {
            x: 125,
            y: 150
        },
        units: '°F',
        max: 100,
        min: 0,
        ranges: [{
            lowerValue: 0,
            upperValue: 20,
            color: "#95a5a6"
        },{
            lowerValue: 20,
            upperValue: 30,
            color: "#9b59b6"
        },{
            lowerValue: 30,
            upperValue: 50,
            color: "#f1c40f"
        },{
            lowerValue: 50,
            upperValue: 80,
            color: "#2ecc71"
        },{
            lowerValue: 80,
            upperValue: 100,
            color: "#e74c3c"
        }]
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                value: this.state.value ++,
                ...this.state
            })
        }, 1000)
    }
    render(){
        return (
            <Gauge {...this.state} height="900px" width="400px"/>
        );
    }
}


Atoms
    .add('Gauge', () => {
        return (
            <div>
            <Panel>
                <TestGauge />
            </Panel>
            </div>
        )
    });