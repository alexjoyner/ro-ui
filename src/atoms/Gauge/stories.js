import React, { Component } from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Panel } from '../Panel';
import { Gauge } from '.';


class TestGauge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 20,
    };
  }

  render() {
    return (
      <Gauge {...this.state} height="400px" width="400px" />
    );
  }
}


storiesOf('Atoms', module)
  .add('Gauge', () => (
    <Panel>
      <TestGauge />
    </Panel>
  ));
