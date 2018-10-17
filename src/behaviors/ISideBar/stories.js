import React from 'react';
import { storiesOf } from '@storybook/react/dist/client/preview';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import MySideBar from '.';
import { BasicSidebar } from '../../atoms/SideBar';
import BasicSideBarPageBody from '../../atoms/SideBar/SideBarPageBody';
import { Button } from '../../atoms/Button';
import ISideBarReducer from './reducer';
import IToggle from './ISideBarToggle';

export const ISideBar = storiesOf('Behaviors/ISideBar', module);

const TestToggleBtn = props => (
  <Button color="primary" {...props}>
    Toggle Side Bar
  </Button>
);
const SideBarBody = props => (
  <BasicSideBarPageBody {...props} >
    <IToggle Button={TestToggleBtn} />
  </BasicSideBarPageBody>
);
const store = createStore(combineReducers({
  ISideBarReducer,
}));

ISideBar.add('ISidebar', () => (
  <Provider store={store}>
    <MySideBar {...{
      SideBar: BasicSidebar,
      Body: SideBarBody,
    }}
    />
  </Provider>
));
