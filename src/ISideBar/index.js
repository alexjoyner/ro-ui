import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

console.warn('ISideBar will be removed soon!');
export const TISideBar = ({ shown, SideBar, Body }) => (
  <div>
    <SideBar shown={shown} />
    <Body sideBarShown={shown} />
  </div>
);
TISideBar.propTypes = {
  shown: PropTypes.bool.isRequired,
  SideBar: PropTypes.func.isRequired,
  Body: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  ...state.ISideBarReducer,
});

export const ISideBar = connect(mapStateToProps, null)(TISideBar);
