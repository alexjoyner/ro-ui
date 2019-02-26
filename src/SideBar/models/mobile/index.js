import React, { Component } from 'react';
import ReactSideBar from 'react-sidebar';

let sideBarRef = null;

class SideBar extends Component {
  constructor(props) {
    super(props);
    const { isInitiallyOpen } = this.props;
    this.state = {
      sideBarOpen: isInitiallyOpen || false,
    };
    this.onSetSideBarOpen = this.onSetSideBarOpen.bind(this);
    sideBarRef = this;
  }

  onSetSideBarOpen(open) {
    this.setState({ sideBarOpen: open });
  }

  onToggleSideBar() {
    const { sideBarOpen } = this.state;
    const newState = {
      sideBarOpen: !sideBarOpen,
    };
    this.setState(newState);
  }

  render() {
    const { children, ...props } = this.props;
    const { sideBarOpen } = this.state;
    return (
      <ReactSideBar
        sidebar={<span>Test SideBar</span>}
        styles={{ sidebar: { background: 'white' } }}
        {...props}
        open={sideBarOpen}
        onSetOpen={this.onSetSideBarOpen}
      >
        {children}
      </ReactSideBar>
    );
  }
}


const sideBarActions = {
  toggle: () => {
    if (sideBarRef) {
      return sideBarRef.onToggleSideBar();
    }
    console.error('You need a sidebar instance to call show!'); // eslint-disable-line no-console
    return null;
  },
};
export { SideBar, sideBarActions };
