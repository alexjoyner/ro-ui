import React from 'react';
import PropTypes from 'prop-types';
import { calcCurrentValueColor } from './utils/calcCurrentValueColor';
import { GaugeRange } from './particles/GaugeRange';
import { GaugeStatusCircle } from './particles/GaugeStatusCircle';
import { Needle } from './particles/Needle';
import { gaugeValueToAngle } from './utils/gaugeValueToAngle';
import { GaugeValue } from './particles/GaugeValue';
import { GaugeCenterPoint } from './particles/GaugeCenterPoint';
import { GaugeCirclesGroup } from './particles/GaugeCirclesGroup';
import { GaugeBaseLine } from './particles/GaugeBaseLine';

const Gauge = (props) => {
  const opts = {
    height: props.height || 'auto',
    width: props.width || '100%',
    radius: 120.5,
    center: {
      x: 125,
      y: 150,
    },
    value: props.value || 0,
    units: props.units || '',
    max: props.max || 100,
    min: props.min || 0,
    ranges: props.ranges,
  };
  return (
    <svg height={opts.height} width={opts.width} viewBox="0 0 250 180">
      <GaugeStatusCircle cx="125" cy="150" r="108.5" fill="none" color={calcCurrentValueColor(opts.value, opts.ranges)} />
      {opts.ranges.map(range => <GaugeRange key={range.id} opts={opts} range={range} />)}
      <GaugeCirclesGroup />
      <Needle points="125,150 115,148 1,150 115,152" transform={`rotate(${gaugeValueToAngle(opts, props.value)}, 125, 150)`} />
      <GaugeValue x="125" y="165">{opts.value}{opts.units}</GaugeValue>
      <GaugeBaseLine x1="1" y1="150" x2="30" y2="150" />
      <GaugeBaseLine x1="250" y1="150" x2="220" y2="150" />
      <GaugeCenterPoint cx="125" cy="150" r="2" fill="white" />
    </svg>
  );
};
Gauge.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  value: PropTypes.number.isRequired,
  units: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  ranges: PropTypes.arrayOf(PropTypes.shape({
    lowerValue: PropTypes.number,
    upperValue: PropTypes.number,
    color: PropTypes.string,
    id: PropTypes.string,
  })),
};
Gauge.defaultProps = {
  height: 'auto',
  width: '100%',
  units: '',
  max: 100,
  min: 0,
  ranges: [{
    lowerValue: 0,
    upperValue: 50,
    color: '#f1c40f',
    id: 'range1',
  }, {
    lowerValue: 50,
    upperValue: 80,
    color: '#2ecc71',
    id: 'range2',
  }, {
    lowerValue: 80,
    upperValue: 100,
    color: '#e74c3c',
    id: 'range3',
  }],
};

export { Gauge };
