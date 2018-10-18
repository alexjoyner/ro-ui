import React from 'react';
import HighCharts from 'highcharts';
import boost from 'highcharts/modules/boost';
import HighchartsReact from 'highcharts-react-official'; // eslint-disable-line import/first
import { THEME } from './demoData/theme';

boost(HighCharts);
const RoHighChart = ({ theme, config }) => {
  HighCharts.setOptions(theme);
  return (
    <div>
      <HighchartsReact
        highcharts={HighCharts}
        options={config}
      />
    </div>
  );
};
RoHighChart.defaultProps = {
  theme: THEME,
};

export { RoHighChart };
