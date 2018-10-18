import React from 'react';
import moment from 'moment';
import { Input } from '../Input';
import { Atoms } from '../_atoms.stories';
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

Atoms
  .add('DatePicker', () => (
    <Panel>
      <CustDatePicker />
    </Panel>
  ));
