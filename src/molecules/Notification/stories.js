import React from 'react';
import { Molecules } from '../_molecules.stories';
import { Notification } from '.';
import { Button } from '../../atoms/Button';

class NotificationTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifShown: true,
    };
  }

  toggleModal() {
    const { notifShown } = this.state;
    this.setState({
      notifShown: !notifShown,
    });
  }

  render() {
    const { notifShown } = this.state;
    return (
      <div>
        <Notification shown={notifShown} onClose={() => this.toggleModal()}>
          <h3>Hello World</h3>
        </Notification>
        <Button
          color="primary"
          onClick={() => this.toggleModal()}
        >
          {notifShown ? ' Madal shown' : 'Modal hidden'}
        </Button>
      </div>
    );
  }
}

Molecules
  .add('Notification', () => (
    <NotificationTest />
  ));
