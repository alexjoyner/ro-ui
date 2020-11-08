import React, { useEffect } from 'react';
import { makeGraph, update } from '../utils/makeGraph';
import { applyWireStyles } from '../utils/styleGraph';
import { registerShape } from '../utils/registerShape';
import { MxResistor } from '../circuit/MxResistor';
import { makeMX_8PinIC } from '../circuit/Mx8PinIC';
import { withWireConnections } from '../circuit/withWireConnections';
import { setupCircuitBuider } from '../circuit/setupCircuitBuilder';
import { setupKeyBindings } from '../circuit/setupKeyBindings';

import './styles/wire-styles.css';

export const BasicWires = () => {
	useEffect(() => {
		const container = document.getElementById('HelloWorldExample')
		const { graph, parent, mxApi } = makeGraph({}, container);
		
		setupCircuitBuider(graph, mxApi);
		setupKeyBindings(graph, mxApi);
		withWireConnections(mxApi);
		applyWireStyles(graph, { grid: true });
		registerShape(mxApi, 'resistor', MxResistor);
		update(graph, () => {
			var v2 = graph.insertVertex(parent, null, 'R1', 220, 220, 80, 20,
				'shape=resistor;verticalLabelPosition=top;verticalAlign=bottom;');
			var v3 = graph.insertVertex(parent, null, 'R2', 120, 120, 80, 20,
				'shape=resistor;verticalLabelPosition=top;verticalAlign=bottom;');
		})
			
		// Starts connections on the background in wire-mode
		var connectionHandlerIsStartEvent = graph.connectionHandler.isStartEvent;
		graph.connectionHandler.isStartEvent = function(me)
		{
			return connectionHandlerIsStartEvent.apply(this, arguments);
		};
		
		mxApi.mxEvent.disableContextMenu(container);
	}, [])

	return (
		<div id="HelloWorldExample" className="dot-grid"></div>
	)
}
