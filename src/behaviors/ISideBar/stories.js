import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { Behaviors } from '../_behaviors.stories';
import MySideBar from '.';
import { BasicSidebar } from '../../atoms/SideBar';
import BasicSideBarPageBody from '../../atoms/SideBar/SideBarPageBody';
import { Button } from '../../atoms/Button';
import ISideBarReducer from './reducer';
import IToggle from './ISideBarToggle';

const TestToggleBtn = props => (
  <Button color="primary" {...props}>
    Toggle Side Bar
  </Button>
);
const SideBarBody = () => (
  <BasicSideBarPageBody >
    <IToggle Button={TestToggleBtn} />
  </BasicSideBarPageBody>
);
const store = createStore(combineReducers({
  ISideBarReducer,
}));

Behaviors.add('ISidebar', () => (
  <Provider store={store}>
    <MySideBar {...{
      SideBar: BasicSidebar,
      Body: SideBarBody,
    }}
    />
  </Provider>
));
