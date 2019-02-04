import React, { useState } from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Radio } from '.';
import { Panel } from '../../_depreciated/Panel';

const RadioExample = () => {
  const [value, setValue] = useState(null);
  return (
    <Panel>
      <h1>Radio Example:</h1>
      <h3>Note: Render props must return array in this case</h3>
      <Radio
        name="radio group"
        onChange={e => setValue(e.target.value)}
        value={value}
      >
        {({ Option }) => [
          <Option key="a" value="1">First</Option>,
          <Option key="b" value="2">Second</Option>,
          <Option key="c" value="3">Third</Option>,
        ]}
      </Radio>
    </Panel>
  );
};

storiesOf('Atoms', module)
  .add('Radio', () => <RadioExample />);
