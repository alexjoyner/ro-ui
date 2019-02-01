import { getData } from './data';

const N = 5001;
export const config = {
  chart: {
    type: 'line',
    zoomType: 'x',
  },
  boost: {
    useGPUTranslations: true,
  },
  title: {
    text: 'Demo Line Chart',
  },
  subtitle: {
    text: document.ontouchstart === undefined
      ? 'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in',
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
  rangeSelector: {
    verticalAlign: 'top',
    x: 0,
    y: 0,
  },
  series: [{
    name: 'Data 1',
    _colorIndex: 0,
    _symbolIndex: 0,
    marker: {
      enabled: false,
    },
    colorByPoint: false,
    data: getData(N),
  }, {
    name: 'Data 2',
    _colorIndex: 1,
    _symbolIndex: 0,
    marker: {
      enabled: false,
    },
    colorByPoint: false,
    data: getData(N),
  }, {
    name: 'Data 3',
    _colorIndex: 2,
    _symbolIndex: 0,
    marker: {
      enabled: false,
    },
    colorByPoint: false,
    data: getData(N),
  }, {
    name: 'Data 4',
    _colorIndex: 3,
    _symbolIndex: 0,
    marker: {
      enabled: false,
    },
    colorByPoint: false,
    data: getData(N),
  }],
};
