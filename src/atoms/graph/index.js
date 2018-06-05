import React, { Component } from 'react';
import 'd3';
import c3 from 'c3';
import 'c3/c3.css';
import PropTypes from 'prop-types';
import { ErrorBoundary } from '../../utils/error-boundary';

class Graph extends Component {
  constructor(props) {
    super(props);
    this.chart = {};
  }
  componentDidMount() {
    this.initChart();
  }
  shouldComponentUpdate(nextProps) {
    this.chart.load({
      columns: [['Data', nextProps.value]],
    });
    return false;
  }
  initChart() {
    this.chart = c3.generate({
      bindto: `#${this.props.chartID}`,
      data: {
        type: 'gauge',
        columns: [['Data', 0]],
      },
      ...this.props.chartOpts,
    });
  }
  render() {
    return (
      <ErrorBoundary>
        <div id={this.props.chartID} />
      </ErrorBoundary>
    );
  }
}
Graph.propTypes = {
  value: PropTypes.number.isRequired,
  chartID: PropTypes.string.isRequired,
  chartOpts: PropTypes.shape({
    data: PropTypes.shape({
      columns: PropTypes.array,
      type: PropTypes.string,
    }),
    donut: {
      title: PropTypes.string,
    },
  }).isRequired,
};

export { Graph };
