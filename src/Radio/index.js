import React from 'react';
import { Radio as basic } from './models/basic';

const defaultModel = 'basic';
const Strategies = {
  basic,
  default: basic,
};

const Radio = ({ model = defaultModel, ...props }) => {
  if (model && typeof model !== 'string') {
    throw TypeError('Radio Model Needs To Be Type String');
  }
  const Component = Strategies[model] || Strategies[defaultModel];
  return <Component {...props} />;
};

export { Radio };
