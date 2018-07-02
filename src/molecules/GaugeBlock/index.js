import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GoGraph } from 'react-icons/lib/go';
import { Panel } from '../../atoms/Panel';
import { Gauge } from '../../atoms/Gauge';
import { Button } from '../../main';

const GaugeBlockBtnContainer = styled.div`
  position: absolute;
  left: 5px;
  top: 5px;
`;
// const SettingsBtnContainer = styled.div`
//   position: absolute;
//   right: 5px;
//   top: 5px;
// `;

const GraphBlockLabel = styled.div`
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

const GaugeBlock = props => (
  <Panel width="25%" >
    <GaugeBlockBtnContainer>
      <Button xsmall dark onClick={props.onClick}>
        <GoGraph size={20} />
      </Button>
    </GaugeBlockBtnContainer>
    {/* <SettingsBtnContainer>
      <Button xsmall dark onClick={props.onClick}>
        <GoGear size={20} />
      </Button>
    </SettingsBtnContainer> */}
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
