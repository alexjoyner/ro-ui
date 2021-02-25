import mx from 'mxgraph';
const {
	mxCylinder,
	mxPoint
} = mx();

function MxDC_Supply() { }
MxDC_Supply.prototype = new mxCylinder();
MxDC_Supply.prototype.constructor = MxDC_Supply;

MxDC_Supply.prototype.redrawPath = function (path, x, y, w, h, isForeground) {
	const dy = h / 6;

	if (isForeground) {
		path.moveTo(25, 1 * dy);
		path.lineTo(w - 25, 1 * dy);
		path.moveTo(10 , 2 * dy);
		path.lineTo(w - 10, 2 * dy);

		path.moveTo(25, 3 * dy);
		path.lineTo(w - 25, 3 * dy);
		path.moveTo(10 , 4 * dy);
		path.lineTo(w - 10, 4 * dy);

		path.moveTo(25, 5 * dy);
		path.lineTo(w - 25, 5 * dy);
		// path.lineTo(3 * dx, 0);
		// path.lineTo(5 * dx, h);
		// path.lineTo(7 * dx, 0);
		// path.lineTo(9 * dx, h);
		// path.lineTo(11 * dx, 0);
		// path.lineTo(13 * dx, h);
		// path.lineTo(14 * dx, h / 2);
		// path.lineTo(16 * dx, h / 2);

		path.end();
	}
}

const makeMX_DC_Supply = (graph, parent, options) => {
  const opts = {
    label: 'V1',
    fillColor: '#FFFFFF',
    fontColor: '#000000',
    strokeColor: '#000000',
    connectable: true,
    x: 120,
		y: 120,
		h: 60,
		w: 60,
    ...options
  }
  
	const v0 = graph.insertVertex(parent, null, 'V1', opts.x, opts.y, 0, 0,
	'shape=square;verticalLabelPosition=top;verticalAlign=bottom;strokeColor=transparent;');
  v0.setConnectable(false);

	const v1 = graph.insertVertex(v0, null, null, 0, 0, 60, 60,
  'shape=dc_supply;verticalLabelPosition=top;verticalAlign=bottom;');
  v1.setConnectable(false);
  v1.geometry.relative = true;

  // const v11 = graph.insertVertex(v1, null, null, 0, opts.y / 2, 1, 1,
  //     'shape=line;align=left;verticalAlign=middle;fontSize=10;routingCenterX=-0.5;'+
  //     'spacingLeft=12;fontColor=' + opts.fontColor + ';strokeColor=' + opts.strokeColor);
  // v11.geometry.relative = true;
  // v11.geometry.offset = new mxPoint(-v11.geometry.width, 2);

  // const v15 = v11.clone();
  // v15.geometry.x = opts.x;
  // v15.geometry.y = opts.y / 2;
  // v15.style =	'shape=line;align=right;verticalAlign=middle;fontSize=10;routingCenterX=0.5;'+
  //   'spacingRight=12;fontColor=' + opts.fontColor + ';strokeColor=' + opts.strokeColor;
  // v15.geometry.offset = new mxPoint(0, 2);
  // v1.insert(v15);
}

export { MxDC_Supply, makeMX_DC_Supply };