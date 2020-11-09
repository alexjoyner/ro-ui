import mx from 'mxgraph';
const {
	mxCylinder,
	mxPoint
} = mx();

function MxResistor() { }
MxResistor.prototype = new mxCylinder();
MxResistor.prototype.constructor = MxResistor;

MxResistor.prototype.redrawPath = function (path, x, y, w, h, isForeground) {
	const dx = w / 16;

	if (isForeground) {
		path.moveTo(0, h / 2);
		path.lineTo(2 * dx, h / 2);
		path.lineTo(3 * dx, 0);
		path.lineTo(5 * dx, h);
		path.lineTo(7 * dx, 0);
		path.lineTo(9 * dx, h);
		path.lineTo(11 * dx, 0);
		path.lineTo(13 * dx, h);
		path.lineTo(14 * dx, h / 2);
		path.lineTo(16 * dx, h / 2);

		path.end();
	}
}

const makeMX_Resistor = (graph, parent, options) => {
  const opts = {
    label: 'R1',
    fillColor: '#FFFFFF',
    fontColor: '#000000',
    strokeColor: '#000000',
    connectable: true,
    x: 220,
    y: 220,
    ...options
  }
  
	const v0 = graph.insertVertex(parent, null, 'R1', opts.x, opts.y, 0, 0,
	'shape=square;verticalLabelPosition=top;verticalAlign=bottom;strokeColor=transparent;');
  v0.setConnectable(false);

	const v1 = graph.insertVertex(v0, null, null, 0, 0, 80, 20,
  'shape=resistor;verticalLabelPosition=top;verticalAlign=bottom;');
  v1.setConnectable(false);
  v1.geometry.relative = true;

  const v11 = graph.insertVertex(v1, null, null, 0, 0, 10, 16,
      'shape=line;align=left;verticalAlign=middle;fontSize=10;routingCenterX=-0.5;'+
      'spacingLeft=12;fontColor=' + opts.fontColor + ';strokeColor=' + opts.strokeColor);
  v11.geometry.relative = true;
  v11.geometry.offset = new mxPoint(-v11.geometry.width, 2);

  const v15 = v11.clone();
  v15.geometry.x = 1;
  v15.style =	'shape=line;align=right;verticalAlign=middle;fontSize=10;routingCenterX=0.5;'+
    'spacingRight=12;fontColor=' + opts.fontColor + ';strokeColor=' + opts.strokeColor;
  v15.geometry.offset = new mxPoint(0, 2);
  v1.insert(v15);
}


export { MxResistor, makeMX_Resistor };