import React from 'react';
import { connect } from 'react-redux';
import { toggleSideBar } from '../actions';

export const $ISideBarToggle = ({ Button, ...props }) => (
  <Button onClick={() => props.toggleSideBar()} />
);

export const ISideBarToggle = connect(null, {
  toggleSideBar,
})($ISideBarToggle);
