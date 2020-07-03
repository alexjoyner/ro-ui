import mx from 'mxgraph';
const mxApi = mx();

const makeGraph = (options, element) => {
	// Checks if the browser is supported
	if (!mxApi.mxClient.isBrowserSupported()) {
		// Displays an error message if the browser is not supported.
		mxApi.mxUtils.error('Browser is not supported!', 200, false);
	}
	else {
		// Disables the built-in context menu
		//mxEvent.disableContextMenu(container);

		// Creates the graph inside the given container
		var graph = new mxApi.mxGraph(element);

		// Enables rubberband selection
		if (options.rubberBand) {
			new mxApi.mxRubberband(graph);
		}

		// Gets the default parent for inserting new cells. This
		// is normally the first child of the root (ie. layer 0).
		var parent = graph.getDefaultParent();

		return { graph, parent, mxApi };
	}
}

const update = (graph, cb) => {
	// Adds cells to the model in a single step
	graph.getModel().beginUpdate();
	try {
		cb()
	}
	finally {
		// Updates the display
		graph.getModel().endUpdate();
	}
}

export { makeGraph, update };