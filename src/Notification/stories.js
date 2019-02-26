import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Notification } from '.';
import { Button } from '../Button';

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

storiesOf('Depreciated', module)
  .add('Notification', () => (
    <NotificationTest />
  ));
