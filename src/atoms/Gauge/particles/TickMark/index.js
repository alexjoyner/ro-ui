import React from 'react';
import PropTypes from 'prop-types';

const Tick = props => (
  <line
    x1="1"
    y1="150"
    x2="15"
    y2="150"
    stroke="#34495e"
    strokeLinecap="round"
    transform={`rotate(${props.angle} 125 150)`}
  />
);
Tick.propTypes = {
  angle: PropTypes.string.isRequired,
};

export { Tick };
