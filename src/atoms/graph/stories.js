import React from 'react';
import { Atoms } from '../_atoms.stories';
import { Graph } from './';
import { Panel } from '../Panel';
import { gaugeSettings } from './graph-settings/gauge';
import { lineGraphSettings } from './graph-settings/line-graph';
import { donutGraphSettings } from './graph-settings/donut-graph';

Atoms
  .add('Graph', () => (
    <div>
      <Panel>
        <Graph
          chartID="gauge-1"
          chartOpts={gaugeSettings}
        />
      </Panel>
      <Panel>
        <Graph
          chartID="line-graph-1"
          chartOpts={lineGraphSettings}
        />
      </Panel>
      <Panel>
        <Graph
          chartID="donut-1"
          chartOpts={donutGraphSettings}
        />
      </Panel>
    </div>
  ));
