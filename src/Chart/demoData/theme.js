import { colors } from '../../colors';

export const THEME = {
  chart: {
    type: 'line',
    plotBackgroundColor: colors.dark,
    backgroundColor: colors.dark,
    style: {
      fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
      color: '#dfe6e9',
      fontSize: '12px',
    },
    borderColor: '#ffffff',
  },
  title: {
    text: 'Categorized, four series',
    style: {
      fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
      color: '#dfe6e9',
      fontSize: '18px',
    },
  },
  subtitle: {
    text: '',
    style: {
      fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
      color: '#dfe6e9',
      fontSize: '18px',
    },
  },
  yAxis: {
    title: {
      style: {
        fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
        color: '#ffffff',
        fontSize: '12px',
        fontWeight: 'normal',
        fontStyle: 'normal',
      },
    },
    labels: {},
  },
  legend: {
    itemStyle: {
      fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
      color: 'white',
      fontSize: '10px',
    },
  },
  tooltip: {
    shared: true,
  },
  colors: [
    colors.warning,
    colors.dangerLight,
    colors.successLight,
    colors.primaryLight,
  ],
  exporting: {
    enabled: true,
  },
  credits: {
    enabled: false,
  },
};
