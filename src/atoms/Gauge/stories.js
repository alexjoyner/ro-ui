import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Panel } from '../../_depreciated/Panel';
import { Gauge } from '.';


const TestGauge = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value < 100) {
      setTimeout(() => {
        setValue(value + 1);
      }, 10000);
    }
  }, [value]);

  return (
    <Gauge value={value} height="400px" width="400px" />
  );
};


storiesOf('Atoms', module)
  .add('Gauge', () => (
    <Panel>
      <TestGauge />
    </Panel>
  ));
