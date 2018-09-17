// @flow
import React, { Component } from 'react';
import { getUniqueID } from '../../../../main';

type Range = {
    upperValue: number,
    lowerValue: number
}

type Props = {
    ranges: Array<Range>
}

class GaugeBlockSettingsPopup extends Component<Props> {
  constructor(props: Props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <ul>
        {this.props.ranges.map((range) => {
          const id = getUniqueID();
          return (
            <li key={id}>
              {`${range.lowerValue} -  ${range.upperValue}  `}
            </li>
          );
        })}
      </ul>
    );
  }
}

export { GaugeBlockSettingsPopup };
