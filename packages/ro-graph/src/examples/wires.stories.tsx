import React, { useEffect } from 'react';
import { makeGraph, update } from '../utils/makeGraph';
import { applyWireStyles } from '../utils/styleGraph';
import { registerShape } from '../utils/registerShape';
import { MxResistor } from '../circuit/MxResistor';
import { makeMX_8PinIC } from '../circuit/Mx8PinIC';
import './styles/wire-styles.css';

export default { title: 'ro-graph/Wires' };

export const BasicWires = () => {
	useEffect(() => {
		const container = document.getElementById('HelloWorldExample')
		const { graph, parent, mxApi } = makeGraph({}, container);

		graph.view.scale = 1;
		graph.setPanning(true);
		graph.setConnectable(true);
		graph.setConnectableEdges(true);
		graph.setDisconnectOnMove(false);
		graph.foldingEnabled = false;

		applyWireStyles(graph, { grid: true });
		registerShape(mxApi, 'resistor', MxResistor);
		update(graph, () => {
			makeMX_8PinIC(graph, parent, {});
			var v2 = graph.insertVertex(parent, null, 'R1', 220, 220, 80, 20,
				'shape=resistor;verticalLabelPosition=top;verticalAlign=bottom;');
		})
	}, [])

	return (
		<div id="HelloWorldExample" className="dot-grid"></div>
	)
}
