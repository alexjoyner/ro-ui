import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Panel } from '../../atoms/Panel';
import { Gauge } from '../../atoms/Gauge';

const GraphBlockLabel = styled.div`
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;
const GaugeBlock = props => (
  <Panel width="25%">
    <Gauge
      {...props}
    />
    <GraphBlockLabel>{props.label}</GraphBlockLabel>
  </Panel>
);

GaugeBlock.propTypes = {
  label: PropTypes.string.isRequired,
};

export { GaugeBlock };
