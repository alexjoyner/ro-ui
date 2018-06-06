import React from 'react';
import { GaugeOuterCircle } from '../GaugeOuterCircle';
import { GaugeRangeBoundary } from '../GaugeRangeBoundary';
import { GaugeInnerCircle } from '../GaugeInnerCircle';

export const GaugeCirclesGroup = () => (
  <g>
    <GaugeOuterCircle cx="125" cy="150" r="124" fill="none" />
    <GaugeRangeBoundary id="gauge-range-boundary-circle" cx="125" cy="150" r="117" fill="none" />
    <GaugeInnerCircle id="gauge-inner-circle" cx="125" cy="150" r="100" fill="none" />
  </g>
);
