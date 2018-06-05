import React from 'react';
import { Molecules } from '../_molecules.stories';
import { Header } from './';
import { Panel } from '../../atoms/Panel';
import { colors } from '../../atoms/colors';

Molecules
  .add('Header', () => (
    <div>
      <Header
        color={colors.primary}
        height="67px"
        fontSize="25px"
        logoText="Header Sticky"
        sticky
      />
      <br /> <br /> <br />
      <Panel>
        <Header
          color={colors.primary}
          height="67px"
          fontSize="25px"
          logoText="Header Not Sticky"
        />
      </Panel>
    </div>
  ));

