import React, { Component } from 'react';
import { Atoms } from '../_atoms.stories';
import { Panel } from '../../atoms/Panel';
import { Gauge } from './';


class TestGauge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 20,
    };
    setInterval(() => {
      if (this.state.value < 100) {
        this.setState({
          value: this.state.value + 1,
        });
      }
    }, 1000);
  }
  render() {
    return (
      <Gauge {...this.state} height="400px" width="400px" />
    );
  }
}


Atoms
  .add('Gauge', () => (
    <Panel>
      <TestGauge />
    </Panel>
  ));
