// @flow
import React from 'react';
import { Atoms } from '../_atoms.stories';
import { Panel } from '../../atoms/Panel';
import { colors } from './';
import { CenteredContent } from '../../atoms/CenteredContent';
import { getTextContrastColor } from '../../utils/getTextContrastColor';

type Props = {
  color: string,
  name: string,
}
const TestColorBox = (props: Props) => (
  <div style={{
    height: '100px',
    width: '100%',
    backgroundColor: props.color,
    color: getTextContrastColor(props.color),
  }}
  >
    <span>{props.name}</span>
  </div>
);

Atoms
  .add('Colors', () => (
    <div>
      <Panel>
        <CenteredContent>
          <h2>Component library color pallete</h2>
          {Object.keys(colors).map(key => (<TestColorBox
            key={key}
            color={colors[key]}
            name={key}
          />))}
        </CenteredContent>
      </Panel>
    </div>
  ));

