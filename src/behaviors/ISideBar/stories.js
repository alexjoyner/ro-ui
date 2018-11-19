import React from 'react';
import { storiesOf } from '@storybook/react/dist/client/preview';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { ISideBar } from '.';
import { AnimatedSideBar } from '../../atoms/SideBar';
import { HeaderSideBarPageBody } from '../../atoms/SideBar/SideBarPageBody';
import { Button } from '../../atoms/Button';
import { ISideBarReducer } from './reducer';
import { ISideBarToggle } from './ISideBarToggle';
import { Header } from '../../atoms/Header';

export const ISideBarBehavior = storiesOf('Behaviors/ISideBar', module);

const TestToggleBtn = props => (
  <Button color="primary" {...props}>Toggle Side Bar</Button>
);
const SideBarBody = props => (
  <div>
    <Header color="dark">
      <ISideBarToggle Button={TestToggleBtn} />
    </Header>
    <HeaderSideBarPageBody {...props}>
      <h1>Test Header Sidebar Story</h1>
    </HeaderSideBarPageBody>
  </div>
);
const store = createStore(combineReducers({
  ISideBarReducer,
}));

ISideBarBehavior.add('ISidebar', () => (
  <Provider store={store}>
    <ISideBar {...{
      SideBar: AnimatedSideBar,
      Body: SideBarBody,
    }}
    />
  </Provider>
));
