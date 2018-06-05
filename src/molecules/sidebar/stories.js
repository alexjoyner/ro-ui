import React from 'react';
import { SideBar } from './';
import { Molecules } from '../_molecules.stories';
import { Header } from '../Header';
import { colors } from '../../atoms/colors';
import { TestGaugeBlock } from '../GaugeBlock/stories';

Molecules
  .add('SideBar', () => (
    <div>
      <Header
        color={colors.primary}
        height="67px"
        fontSize="25px"
        logoText="Dashboard Demo"
      />
      <div className="PageBody">
        <TestGaugeBlock />
      </div>
      <SideBar>
        <h2>Taco Stuff</h2>
        <ul>
          <li>Shells</li>
          <li>Beans</li>
          <li>Tomatoes</li>
          <li>Sour Cream</li>
          <li>Cheese</li>
        </ul>
      </SideBar>
    </div>
  ));
