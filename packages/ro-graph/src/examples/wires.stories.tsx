import React, { useEffect } from 'react';
import { makeGraph, update } from '../utils/makeGraph';
import { applyWireStyles } from '../utils/styleGraph';
import { registerShape } from '../utils/registerShape';
import { MxResistor } from '../circuit/MxResistor';
import './styles/wire-styles.css';

export default { title: 'ro-graph/Wires' };

export const BasicWires = () => {
	useEffect(() => {
		const fillColor = '#FFFFFF';
		const container = document.getElementById('HelloWorldExample')
		const { graph, parent, mxApi } = makeGraph({}, container);
		applyWireStyles(graph, { grid: true });
		registerShape(mxApi, 'resistor', MxResistor);
		update(graph, () => {
			const v1 = graph.insertVertex(parent, null, 'J1', 80, 40, 40, 80,
				`verticalLabelPosition=top;verticalAlign=bottom;shadow=1;fillColor=${fillColor}`);
			v1.setConnectable(true);
			var v2 = graph.insertVertex(parent, null, 'R1', 220, 220, 80, 20,
				'shape=resistor;verticalLabelPosition=top;verticalAlign=bottom;');
		})
	}, [])

	return (
		<div id="HelloWorldExample" className="dot-grid"></div>
	)
}
