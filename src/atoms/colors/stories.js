// @flow
import React from 'react';
import { Atoms } from '../_atoms.stories';
import { Panel } from '../../atoms/Panel';
import { colors } from './';
import { CenteredContent } from '../../atoms/CenteredContent';

type Props = {
  color: string,
}
const TestColorBox = (props: Props) => (
  <div style={{ height: '100px', width: '50%', backgroundColor: props.color }} />
);

Atoms
  .add('Colors', () => (
    <div>
      <Panel>
        <h2>Component library color pallete</h2>
        <CenteredContent>
          <TestColorBox color={colors.default} />
          <TestColorBox color={colors.primary} />
          <TestColorBox color={colors.primaryLight} />
          <TestColorBox color={colors.success} />
          <TestColorBox color={colors.successLight} />
          <TestColorBox color={colors.warning} />
          <TestColorBox color={colors.warningLight} />
          <TestColorBox color={colors.danger} />
          <TestColorBox color={colors.dangerLight} />
        </CenteredContent>
      </Panel>
    </div>
  ));

