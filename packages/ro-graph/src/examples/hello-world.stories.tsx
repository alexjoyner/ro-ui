import React, { useEffect } from 'react';
import { makeGraph, update } from '../utils/makeGraph';

export default { title: 'ro-graph/Basic' };

export const HelloWorld = () => {
	useEffect(() => {
		const { graph, parent } = makeGraph({}, document.getElementById('HelloWorldExample'));
		update(graph, () => {
			let v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30);
			let v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
			let e1 = graph.insertEdge(parent, null, '', v1, v2);
		})
	}, [])

	return (
		<div id="HelloWorldExample"></div>
	)
}
