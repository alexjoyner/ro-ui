import { v1Defaults } from './v1/defaults';

const Strategies = {
  v1: v1Defaults,
  default: v1Defaults,
};

const getDefaults = (model) => {
  if (model && typeof model !== 'string') {
    throw TypeError('Model Needs To Be Type String');
  }
  return Strategies[model] || Strategies.default;
};

export { getDefaults };
