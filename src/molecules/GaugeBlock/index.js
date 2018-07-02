import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaAreaChart } from 'react-icons/lib/fa';
import { Panel } from '../../atoms/Panel';
import { Gauge } from '../../atoms/Gauge';
import { Button } from '../../main';

const GaugeBlockBtnContainer = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
`;

const GraphBlockLabel = styled.div`
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

const GaugeBlock = props => (
  <Panel width="25%" onClick={props.onClick}>
    <GaugeBlockBtnContainer>
      <Button small primary>
        <FaAreaChart />
      </Button>
    </GaugeBlockBtnContainer>
    <Gauge
      {...props}
    />
    <GraphBlockLabel>{props.label}</GraphBlockLabel>
  </Panel>
);

GaugeBlock.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { GaugeBlock };
