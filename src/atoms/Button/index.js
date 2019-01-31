import { Button as v1Button } from './models/v1';
import { Button as v2Button } from './models/v2';

const Strategies = {
  v1: v1Button,
  v2: v2Button,
  default: v1Button,
};

const Button = ({ model = 'v1', ...props }) => {
  if (model && typeof model !== 'string') {
    throw TypeError('Model Needs To Be Type String');
  }
  const component = Strategies[model] || Strategies.default;
  return component(props);
};

export { Button };
