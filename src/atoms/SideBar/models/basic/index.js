import React, { Component } from 'react';
import ReactSideBar from 'react-sidebar';
import { Button } from '../../../Button';

let sideBarRef = null;

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    sideBarRef = this;
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  onToggleSidebar() {
    const { sidebarOpen } = this.state;
    const newState = {
      sidebarOpen: !sidebarOpen,
    };
    this.setState(newState);
  }

  render() {
    const { children, ...props } = this.props;
    const { sidebarOpen } = this.state;
    return (
      <ReactSideBar
        {...props}
        open={sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: 'white' } }}
      >
        {children}
      </ReactSideBar>
    );
  }
}


const sideBarActions = {
  toggle: () => {
    if (sideBarRef) {
      sideBarRef.onToggleSidebar();
    }
    return null;
  },
};
export { SideBar, sideBarActions };
