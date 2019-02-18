import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../../../../../_depreciated/colors';
import { RangePath } from '../RangePath';
import { TickMark } from '../TickMark';
import { gaugeValueToAngle } from '../../utils/gaugeValueToAngle';
import { polarToCartesian } from '../../utils/polarToCartesian';
import { getLabelOffset } from '../../utils/getLabelOffset';
import { GaugeLabel } from '../GaugeLabel';

const GaugeRange = ({ opts, range }) => {
  const lowerBoundAngle = gaugeValueToAngle(opts, range.lowerValue);
  const lowerBoundPoint = polarToCartesian(opts, lowerBoundAngle);
  const upperBoundAngle = gaugeValueToAngle(opts, range.upperValue);
  const upperBoundPoint = polarToCartesian(opts, upperBoundAngle);
  const M = `M ${lowerBoundPoint.x} ${lowerBoundPoint.y} `;
  const A = `A ${opts.radius} ${opts.radius} 0 0 1 ${upperBoundPoint.x} ${upperBoundPoint.y}`;
  const labelOffsetX = getLabelOffset(upperBoundPoint.x, range.upperValue, opts);
  return (
    <g>
      <RangePath
        stroke={colors[range.alertLevel] || colors.default}
        d={`${M} ${A}`}
        fill="none"
      />
      <TickMark angle={upperBoundAngle} />
      <GaugeLabel x={labelOffsetX} y={upperBoundPoint.y - 10}>{range.upperValue}</GaugeLabel>
    </g>
  );
};
GaugeRange.propTypes = {
  opts: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
    radius: PropTypes.number,
    center: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
    value: PropTypes.number,
    units: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    ranges: PropTypes.arrayOf(PropTypes.shape({
      lowerValue: PropTypes.number,
      upperValue: PropTypes.number,
      color: PropTypes.string,
      id: PropTypes.string,
    })),
  }).isRequired,
  range: PropTypes.shape({
    upperValue: PropTypes.number,
    lowerValue: PropTypes.number,
    color: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export { GaugeRange };
