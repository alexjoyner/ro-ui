// @flow
import React from 'react';
import { connect } from 'react-redux';
import { toggleSideBar } from '../actions';

type btnProps = {
  Button: any,
  toggleSideBar: Function,
}
export const ISideBarToggle = ({ Button, ...props }: btnProps) => (
  <Button onClick={() => props.toggleSideBar()} />
);

export default connect(null, {
  toggleSideBar,
})(ISideBarToggle);
