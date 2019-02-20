import React from 'react';
import { Slider as basic } from './models/basic';

const defaultModel = 'basic';
const Strategies = {
  basic,
  default: basic,
};

const Slider = ({ model = defaultModel, ...props }) => {
  if (model && typeof model !== 'string') {
    throw TypeError('Slider Model Needs To Be Type String');
  }
  const Component = Strategies[model] || Strategies[defaultModel];
  return <Component {...props} />;
};

export { Slider };
