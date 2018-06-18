import React from 'react';
import './highcharts';
import ReactHighcharts from 'react-highcharts'; // eslint-disable-line import/first
import { config } from './demoData/config';

const RoHighChart = () => (
  <div>
    <ReactHighcharts config={config} />
  </div>
);

export { RoHighChart };
