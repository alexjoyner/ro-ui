import React from 'react';
import ReactDatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

export const DatePicker = (props) => (
	<div style={{ display: 'inline-block' }}>
		{/* <style>
      {`
      .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
        padding-left: 0;
        padding-right: 0;
      }`}
    </style> */}
		<ReactDatePicker {...props} />
	</div>
);
