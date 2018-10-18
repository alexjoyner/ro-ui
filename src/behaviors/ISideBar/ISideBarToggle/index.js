import React from 'react';
import { connect } from 'react-redux';
import { toggleSideBar } from '../actions';

export const ISideBarToggle = ({ Button, ...props }) => (
  <Button onClick={() => props.toggleSideBar()} />
);

export default connect(null, {
  toggleSideBar,
})(ISideBarToggle);
