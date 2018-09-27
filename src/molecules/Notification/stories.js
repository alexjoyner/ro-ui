import React from 'react';
import { Molecules } from '../_molecules.stories';
import { Notification } from '.';
import { Button } from '../../main';

class NotificationTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifShown: true,
    };
  }
  toggleModal() {
    this.setState({
      notifShown: !this.state.notifShown,
    });
  }
  render() {
    return (
      <div>
        <Notification shown={this.state.notifShown} onClose={() => this.toggleModal()}>
          <h3>Hello World</h3>
        </Notification>
        <Button color="primary" onClick={() => this.toggleModal()} > Modal {this.state.notifShown ? 'shown' : 'hidden'} </Button>
      </div>
    );
  }
}

Molecules
  .add('Notification', () => (
    <NotificationTest />
  ));
