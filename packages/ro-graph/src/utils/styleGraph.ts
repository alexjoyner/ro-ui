const applyWireStyles = (graph, opts) => {
	const strokeWidth = 2;
	const invert = false;
	var fontColor = (invert) ? '#FFFFFF' : '#000000';
	var strokeColor = (invert) ? '#C0C0C0' : '#000000';
	var style = graph.getStylesheet().getDefaultEdgeStyle();
	style = graph.getStylesheet().getDefaultVertexStyle();
	style['gradientDirection'] = 'south';
	//style['gradientColor'] = '#909090';
	style['strokeColor'] = strokeColor;
	//style['fillColor'] = '#e0e0e0';
	style['fillColor'] = 'none';
	style['fontColor'] = fontColor;
	style['fontStyle'] = '1';
	style['fontSize'] = '12';
	style['resizable'] = '0';
	style['rounded'] = '1';
	style['strokeWidth'] = strokeWidth;
}

export { applyWireStyles };