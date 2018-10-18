import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const $ISideBar = ({ shown, SideBar, Body }) => (
  <div>
    {(shown) && <SideBar />}
    <Body sideBarShown={shown} />
  </div>
);
$ISideBar.propTypes = {
  shown: PropTypes.bool.isRequired,
  SideBar: PropTypes.func.isRequired,
  Body: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  ...state.ISideBarReducer,
});

export const ISideBar =  connect(mapStateToProps, null)($ISideBar);
