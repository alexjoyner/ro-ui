import React from 'react';
import { RadioGroup, StyledRadio as Option } from 'baseui/radio';

const Radio = ({ children, ...rest }) => (
  <RadioGroup {...rest}>
    {children({ Option })}
  </RadioGroup>
);

export { Radio };
