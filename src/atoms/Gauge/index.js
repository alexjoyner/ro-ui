import React from 'react';
import PropTypes from 'prop-types';
import { getComponents } from '../../utils/getComponents';
import defaults from './defaults';
import { calcCurrentValueColor } from './utils/calcCurrentValueColor';
import { gaugeValueToAngle } from './utils/gaugeValueToAngle';
import { getUniqueID } from '../../utils/getUniqueID';

const Gauge = (props) => {
  const {
    width, value, units, max, min, ranges, overrides,
  } = props;
  const opts = {
    radius: 120.5,
    center: {
      x: 125,
      y: 150,
    },
    width,
    value,
    units,
    max,
    min,
    ranges,
  };
  const {
    GaugeBase: { component: GaugeBase, props: gaugeBaseProps },
    GaugeStatusCircle: { component: GaugeStatusCircle, props: gaugeStatusCircleProps },
    GaugeRange: { component: GaugeRange, props: gaugeRangeProps },
    GaugeCirclesGroup: { component: GaugeCirclesGroup, props: gaugeCirclesGroupProps },
    Needle: { component: Needle, props: needleProps },
    GaugeValue: { component: GaugeValue, props: gaugeValueProps },
    LeftGaugeBaseLine: { component: LeftGaugeBaseLine, props: leftGaugeBaseLineProps },
    RightGaugeBaseLine: { component: RightGaugeBaseLine, props: rightGaugeBaseLineProps },
    GaugeCenterPoint: { component: GaugeCenterPoint, props: gaugeCenterPointProps },
  } = getComponents(defaults, overrides);
  return (
    <GaugeBase
      width={opts.width}
      {...gaugeBaseProps}
    >
      <GaugeStatusCircle
        cx="125"
        cy="150"
        r="108.5"
        fill="none"
        color={calcCurrentValueColor(opts.value, opts.ranges)}
        {...gaugeStatusCircleProps}
      />
      {opts.ranges.map(range => (
        <GaugeRange
          key={range.id || getUniqueID()}
          opts={opts}
          range={range}
          {...gaugeRangeProps}
        />
      ))}
      <GaugeCirclesGroup {...gaugeCirclesGroupProps} />
      <Needle
        points="125,150 115,148 1,150 115,152"
        transform={`rotate(${gaugeValueToAngle(opts, opts.value)}, 125, 150)`}
        {...needleProps}
      />
      <GaugeValue x="125" y="165" {...gaugeValueProps}>
        {opts.value}
        {opts.units}
      </GaugeValue>
      <LeftGaugeBaseLine x1="1" y1="150" x2="30" y2="150" {...leftGaugeBaseLineProps} />
      <RightGaugeBaseLine x1="250" y1="150" x2="220" y2="150" {...rightGaugeBaseLineProps} />
      <GaugeCenterPoint cx="125" cy="150" r="2" fill="white" {...gaugeCenterPointProps} />
    </GaugeBase>
  );
};
Gauge.propTypes = {
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
  width: '100%',
  units: '',
  max: 100,
  min: 0,
  ranges: [{
    lowerValue: 0,
    upperValue: 50,
    color: 'warning',
    id: 'range1',
  }, {
    lowerValue: 50,
    upperValue: 80,
    color: 'success',
    id: 'range2',
  }, {
    lowerValue: 80,
    upperValue: 100,
    color: 'danger',
    id: 'range3',
  }],
};

export { Gauge };
