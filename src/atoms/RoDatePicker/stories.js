import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import moment from 'moment';
import { Input } from '../Input';
import { Panel } from '../Panel';
import { RoDatePicker } from '.';

class CustDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateValue: moment(),
    };
  }

  handleChange(value) {
    this.setState({
      dateValue: value,
    });
  }

  render() {
    const { dateValue } = this.state;
    return (
      <RoDatePicker
        customInput={<Input labelText="Test Datepicker" />}
        onChange={date => this.handleChange(date)}
        selected={dateValue}
        timeFormat="HH:mm"
        dateFormat="YYYY-MM-DD HH:mm"
        timeIntervals={30}
        showTimeSelect
      />
    );
  }
}

storiesOf('Atoms', module)
  .add('DatePicker', () => (
    <Panel>
      <CustDatePicker />
    </Panel>
  ));
