// @flow
import React from 'react';
import { connect } from 'react-redux';

type props = {
  shown: boolean,
  SideBar: any,
};

export const ISideBar = ({ shown, SideBar }: props) => (
  <div >
    {(shown) && <SideBar />}
  </div>
);

const mapStateToProps = state => ({
  ...state.ISideBarReducer,
});

export default connect(mapStateToProps, null)(ISideBar);
