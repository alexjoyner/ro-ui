import React from 'react';
import { Gauge as needle } from './models/needle';

const Strategies = {
  needle,
  default: needle,
};

const Gauge = ({ model = 'needle', ...props }) => {
  if (model && typeof model !== 'string') {
    throw TypeError('Gauge Model Needs To Be Type String');
  }
  const Component = Strategies[model] || Strategies.default;
  return <Component {...props} />;
};

export { Gauge };
