import React from 'react';
import { RangePath } from '../RangePath';
import { Tick } from '../TickMark';
import { gaugeValueToAngle } from '../../utils/gaugeValueToAngle';
import { polarToCartesian } from '../../utils/polarToCartesian';
import { getLabelOffset } from '../../utils/getLabelOffset';
import { GaugeLabel } from '../GaugeLabel';

export const GaugeRange = ({ opts, range, index }) => {
  const lowerBoundAngle = gaugeValueToAngle(opts, range.lowerValue);
  const lowerBoundPoint = polarToCartesian(opts, lowerBoundAngle);
  const upperBoundAngle = gaugeValueToAngle(opts, range.upperValue);
  const upperBoundPoint = polarToCartesian(opts, upperBoundAngle);
  const M = `M ${lowerBoundPoint.x} ${lowerBoundPoint.y} `;
  const A = `A ${opts.radius} ${opts.radius} 0 0 1 ${upperBoundPoint.x} ${upperBoundPoint.y}`;
  const labelOffsetX = getLabelOffset(upperBoundPoint.x, range.upperValue, opts);
  return (
    <g key={index}>
      <RangePath
        stroke={range.color}
        d={`${M} ${A}`}
        fill="none"
      />
      <Tick angle={upperBoundAngle} />
      <GaugeLabel x={labelOffsetX} y={upperBoundPoint.y - 10}>{range.upperValue}</GaugeLabel>
    </g>
  );
};
