import React from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GoGraph, GoGear, GoCheck } from 'react-icons/lib/go';
import { Panel } from '../../atoms/Panel';
import { Gauge } from '../../atoms/Gauge';
import { Button } from '../../main';

const GaugeBlockBtnContainer = styled.div`
  position: absolute;
  left: 5px;
  top: 5px;
`;
const SettingsBtnContainer = styled.div`
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
  <Panel width="25%" >
    <ReactTooltip style={{ pointerEvent: 'auto !important' }} place="bottom" effect="solid" >
      {/* <ul>
        {props.ranges.map((range) => {
          console.log(props);
          const id = getUniqueID();
          return (
            <li key={id}>
              {`${range.lowerValue} -  ${range.upperValue}  `}
              <GoGear />
              <GoGear />
            </li>
          );
        })}
      </ul> */}
      <h3><strong>Coming soon! Edit this gauges settings here!</strong></h3>
    </ReactTooltip>
    <GaugeBlockBtnContainer>
      {(props.multiSelected) ? (
        <Button xsmall success onClick={props.onClick} >
          <GoCheck size={20} />
        </Button>
        ) : (
          <Button xsmall dark onClick={props.onClick}>
            <GoGraph size={20} />
          </Button>
        )}
    </GaugeBlockBtnContainer>
    <SettingsBtnContainer>
      <div data-tip data-event="click">
        <Button xsmall dark onClick={props.onClick} >
          <GoGear size={20} />
        </Button>
      </div>
    </SettingsBtnContainer>
    <Gauge
      {...props}
    />
    <GraphBlockLabel>{props.label}</GraphBlockLabel>
  </Panel>
);

GaugeBlock.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  multiSelected: PropTypes.bool,
};

GaugeBlock.defaultProps = {
  multiSelected: false,
};

export { GaugeBlock };
