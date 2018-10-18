import React from 'react';
import { connect } from 'react-redux';

export const _ISideBar = ({ shown, SideBar, Body }) => (
  <div>
    {(shown) && <SideBar />}
    <Body sideBarShown={shown} />
  </div>
);

const mapStateToProps = state => ({
  ...state.ISideBarReducer,
});

export const ISideBar =  connect(mapStateToProps, null)(_ISideBar);
