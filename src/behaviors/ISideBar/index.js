import React from 'react';
import { connect } from 'react-redux';

export const ISideBar = ({ shown, SideBar, Body }) => (
  <div >
    {(shown) && <SideBar />}
    <Body sideBarShown={shown} />
  </div>
);

const mapStateToProps = state => ({
  ...state.ISideBarReducer,
});

export default connect(mapStateToProps, null)(ISideBar);
