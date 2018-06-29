// @flow
import React from 'react';
import HighCharts from 'highcharts';
import boost from 'highcharts/modules/boost';
import HighchartsReact from 'highcharts-react-official'; // eslint-disable-line import/first
import { THEME } from './demoData/theme';

type RoHighChartProps = {
  config: any,
  theme?: any,
}
boost(HighCharts);
const RoHighChart = (props: RoHighChartProps) => {
  HighCharts.setOptions(props.theme);
  return (
    <div>
      <HighchartsReact
        highcharts={HighCharts}
        options={props.config}
      />
    </div>
  );
};
RoHighChart.defaultProps = {
  theme: THEME,
};

export { RoHighChart };
