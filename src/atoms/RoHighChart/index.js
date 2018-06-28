// @flow
import React from 'react';
import HighCharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'; // eslint-disable-line import/first
import { THEME } from './demoData/theme';

type RoHighChartProps = {
  config: any,
}
// HighCharts.setOptions(THEME);
const RoHighChart = (props: RoHighChartProps) => (
  <div>
    <HighchartsReact
      highcharts={HighCharts}
      options={props.config}
    />
  </div>
);

export { RoHighChart };
