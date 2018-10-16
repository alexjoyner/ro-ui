// @flow
import React from 'react';
import { connect } from 'react-redux';

type props = {
  shown: boolean,
  SideBar: any,
  Body: any,
};

export const ISideBar = ({ shown, SideBar, Body }: props) => (
  <div >
    {(shown) && <SideBar />}
    <Body />
  </div>
);

const mapStateToProps = state => ({
  ...state.ISideBarReducer,
});

export default connect(mapStateToProps, null)(ISideBar);
