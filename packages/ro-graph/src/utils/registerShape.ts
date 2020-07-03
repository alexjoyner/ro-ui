const registerShape = (mxInstance, shapeName, shapeFunc) => {
	console.log(shapeFunc);
	mxInstance.mxCellRenderer.registerShape(shapeName, shapeFunc);
}
export { registerShape };