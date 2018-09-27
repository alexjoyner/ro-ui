import React from 'react';
import { Molecules } from '../_molecules.stories';
import { Header } from './';
import { Panel } from '../../atoms/Panel';

Molecules
  .add('Header', () => (
    <div>
      <Header
        color="warning"
        height="67px"
        fontSize="25px"
        logoText="Header Sticky"
        fontColor="black"
        sticky
      />
      <br /> <br /> <br />
      <Panel>
        <Header
          color="primary"
          height="67px"
          fontSize="25px"
          logoText="Header Not Sticky"
        />
      </Panel>
    </div>
  ));

