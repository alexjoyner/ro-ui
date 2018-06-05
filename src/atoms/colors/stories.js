import React from 'react';
import PropTypes from 'prop-types';
import { Atoms } from '../_atoms.stories';
import { Panel } from '../../atoms/Panel';
import { colors } from './';
import { CenteredContent } from '../../atoms/CenteredContent';

const TestColorBox = props => (
  <div style={{ height: '100px', width: '50%', backgroundColor: props.color }} />
);
TestColorBox.propTypes = {
  color: PropTypes.string.isRequired,
};
Atoms
  .add('Colors', () => (
    <div>
      <Panel>
        <h2>Testing</h2>
        <CenteredContent>
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

