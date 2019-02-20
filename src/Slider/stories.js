import React, { useState } from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Slider } from '.';


const SliderExample = () => {
  const [slideValue, setValue] = useState([10, 20, 30, 40]);
  return (
    <>
      <Slider
        value={slideValue}
        range={[0, 80]}
        onChange={({ value }) => setValue(value)}
      />
    </>
  );
};

storiesOf('Atoms', module)
  .add('Slider', () => <SliderExample />);
