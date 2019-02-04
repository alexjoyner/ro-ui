import React from 'react';
import { Card as basic } from './models/basic';

const defaultModel = 'basic';
const Strategies = {
  basic,
  default: basic,
};

const Card = ({ model = defaultModel, ...props }) => {
  if (model && typeof model !== 'string') {
    throw TypeError('Card Model Needs To Be Type String');
  }
  const Component = Strategies[model] || Strategies[defaultModel];
  return <Component {...props} />;
};

export { Card };
