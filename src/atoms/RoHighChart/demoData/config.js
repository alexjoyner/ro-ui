import HighCharts from 'highcharts';
import data from './data';
import { THEME } from './theme';

HighCharts.setOptions(THEME);
export const config = {
  chart: {
    type: 'line',
    zoomType: 'x',
  },
  title: {
    text: 'Demo Line Chart',
  },
  subtitle: {
    text: document.ontouchstart === undefined ?
      'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in',
  },
  xAxis: {
    type: 'datetime',
    labels: {
      style: {
        color: 'white',
      },
    },
  },
  yAxis: {
    title: {
      text: 'Value',
    },
    labels: {
      format: '{value}',
      style: {
        color: 'white',
      },
    },
  },
  legend: {
    enabled: true,
  },
  plotOptions: {
    area: {
      threshold: null,
    },
  },
  rangeSelector: {
    verticalAlign: 'top',
    x: 0,
    y: 0,
  },
  series: [{
    name: 'Demo Data',
    _colorIndex: 3,
    _symbolIndex: 0,
    marker: {
      enabled: false,
    },
    colorByPoint: false,
    data,
  }],
};
