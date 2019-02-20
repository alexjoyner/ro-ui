import React from 'react';
import { Toast as basic, toaster as basicToaster } from './models/basic';

const defaultModel = 'basic';
const Strategies = {
  basic,
  default: basic,
};
const ToasterStrategies = {
  basic: basicToaster,
  default: basicToaster,
};

const Toast = ({ model = defaultModel, ...props }) => {
  if (model && typeof model !== 'string') {
    throw TypeError('Toast Model Needs To Be Type String');
  }
  const Component = Strategies[model] || Strategies[defaultModel];
  return <Component {...props} />;
};

const toaster = (model = defaultModel) => {
  if (model && typeof model !== 'string') {
    throw TypeError('Toaster Model Needs To Be Type String');
  }
  return ToasterStrategies[model] || ToasterStrategies[defaultModel];
};


export { Toast, toaster };
