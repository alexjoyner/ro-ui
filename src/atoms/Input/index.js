import React from 'react';
import { Input as basic } from './models/basic';
import { Input as material } from './models/material';
import { Input as stateful } from './models/stateful';
import { Input as masked } from './models/masked';

const defaultModel = 'material';
const Strategies = {
  material,
  basic,
  stateful,
  masked,
};

const Input = ({ model = defaultModel, ...props }) => {
  if (model && typeof model !== 'string') {
    throw TypeError('Input Model Needs To Be Type String');
  }
  const Component = Strategies[model] || Strategies[defaultModel];
  return <Component {...props} />;
};

export { Input };
