import React, {Component} from 'react';
import {Panel} from '../../atoms/Panel';
import {Graph} from '../../atoms/Graph';
import {gaugeSettings} from '../../atoms/Graph/graph-settings/gauge';

const GaugeBlock = (props) => (
    <Panel>
        <h1>Hello World</h1>
        {props.children}
    </Panel>
);

class Test extends Component{
    state = {
        'value': 1
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                'value': this.state.value + 1
            })
        }, 1000)
    }
    render(){
        return (
            <GaugeBlock {...this.state}>
                <Graph
                    {...this.state}
                    chartID={'gauge-' + 1}
                    chartOpts={gaugeSettings}/>
            </GaugeBlock>
        )
    }
}


export {Test};
