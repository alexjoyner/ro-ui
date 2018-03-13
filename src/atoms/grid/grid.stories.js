import React from 'react';
import {Atoms} from "../_atoms.stories"
import {Grid, HalfRow} from "./grid"
import {Panel} from "../panel/panel"
import {Graph} from "../graph/graph"
import {gaugeSettings} from "../graph/graph-settings/gauge"
import {lineGraphSettings} from "../graph/graph-settings/line-graph";
Atoms.add(
	'grid', () => (
		<Panel class="ro-grid">
			<Panel className="ro-half-row">
				<Graph
					chartID={'chart-1'}
					chartOpts={gaugeSettings}/>
			</Panel>
			<Panel className="ro-half-row">
				<Graph
					chartID={'chart-2'}
					chartOpts={lineGraphSettings}/>
			</Panel>
		</Panel>
	)
);