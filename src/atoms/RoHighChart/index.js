// @flow
import React from 'react';
import './highcharts';
import ReactHighcharts from 'react-highcharts'; // eslint-disable-line import/first

type RoHighChartProps = {
  config: any,
}
const RoHighChart = (props: RoHighChartProps) => (
  <div>
    <ReactHighcharts config={props.config} />
  </div>
);

export { RoHighChart };
