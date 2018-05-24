import React, {Component} from 'react';
import {Molecules} from '../_molecules.stories';
import {GaugeBlock} from './';
import styled from 'styled-components';
import {CenteredContent} from '../../atoms/CenteredContent';

export class TestGaugeBlock extends Component{
    state = {
        'value': 1
    }
    componentDidMount(){
        setInterval(() => {
            if(this.state.value === 100) return;
            this.setState({
                'value': this.state.value + 1
            })
        }, 1000)
    }
    render(){
        return (
            <GaugeBlock id={1} {...this.state} label={'Sensor 1'}></GaugeBlock>
        )
    }
}


Molecules
    .add('GaugeBlock', () => (
        <TestGaugeBlock></TestGaugeBlock>
    ))