import React from 'react';
import { SideBar as classic } from './models/classic';
import { SideBar as mobile, sideBarActions as mobileActions } from './models/mobile';

const defaultModel = 'mobile';
const Strategies = {
  classic,
  mobile,
};
const ActionStrategies = {
  classic: () => { throw Error('Classic Actions Not Implemented'); },
  mobile: mobileActions,
};
const SideBar = ({ model = defaultModel, ...props }) => {
  if (model && typeof model !== 'string') {
    throw TypeError('SideBar Model Needs To Be Type String');
  }
  const Component = Strategies[model] || Strategies[defaultModel];
  return <Component {...props} />;
};
const sideBarActions = (model = defaultModel) => {
  if (model && typeof model !== 'string') {
    throw TypeError('SideBar Model Needs To Be Type String');
  }
  return ActionStrategies[model] || ActionStrategies[defaultModel];
};

export { SideBar, sideBarActions };
