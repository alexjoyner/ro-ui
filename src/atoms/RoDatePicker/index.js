import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const RoDatePicker = props => (
  <div style={{ display: 'inline-block' }}>
    <style>
      {`
      .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
        padding-left: 0;
        padding-right: 0;
      }`}
    </style>
    <DatePicker {...props} />
  </div>
);
