import React, { useEffect } from 'react';
import { makeGraph, update } from '../utils/makeGraph';
import { applyWireStyles } from '../utils/styleGraph';
import { registerShape } from '../utils/registerShape';
import { MxResistor, makeMX_Resistor } from '../circuit/MxResistor';
import { MxDC_Supply, makeMX_DC_Supply } from '../circuit/MxDC_Supply';
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
		registerShape(mxApi, 'dc_supply', MxDC_Supply);
		update(graph, () => {
			makeMX_8PinIC(graph, parent, {});
			makeMX_Resistor(graph, parent, {});
			makeMX_DC_Supply(graph, parent, {});
		})
			
		// Starts connections on the background in wire-mode
		const connectionHandlerIsStartEvent = graph.connectionHandler.isStartEvent;
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
