import mx from 'mxgraph';

const { mxPoint } = mx();

const makeMX_8PinIC = (graph, parent, options) => {
  const opts = {
    label: 'J1',
    fillColor: '#FFFFFF',
    fontColor: '#000000',
    strokeColor: '#000000',
    connectable: true,
    ...options
  }

  const v1 = graph.insertVertex(parent, null, 'J1', 80, 40, 40, 80,
      'verticalLabelPosition=top;verticalAlign=bottom;shadow=1;fillColor=' + opts.fillColor);
  v1.setConnectable(false);

  const v11 = graph.insertVertex(v1, null, '1', 0, 0, 10, 16,
      'shape=line;align=left;verticalAlign=middle;fontSize=10;routingCenterX=-0.5;'+
      'spacingLeft=12;fontColor=' + opts.fontColor + ';strokeColor=' + opts.strokeColor);
  v11.geometry.relative = true;
  v11.geometry.offset = new mxPoint(-v11.geometry.width, 2);
  const v12 = v11.clone();
  v12.value = '2';
  v12.geometry.offset = new mxPoint(-v11.geometry.width, 22);
  v1.insert(v12);
  const v13 = v11.clone();
  v13.value = '3';
  v13.geometry.offset = new mxPoint(-v11.geometry.width, 42);
  v1.insert(v13);
  const v14 = v11.clone();
  v14.value = '4';
  v14.geometry.offset = new mxPoint(-v11.geometry.width, 62);
  v1.insert(v14);

  const v15 = v11.clone();
  v15.value = '5';
  v15.geometry.x = 1;
  v15.style =	'shape=line;align=right;verticalAlign=middle;fontSize=10;routingCenterX=0.5;'+
    'spacingRight=12;fontColor=' + opts.fontColor + ';strokeColor=' + opts.strokeColor;
  v15.geometry.offset = new mxPoint(0, 2);
  v1.insert(v15);
  const v16 = v15.clone();
  v16.value = '6';
  v16.geometry.offset = new mxPoint(0, 22);
  v1.insert(v16);
  const v17 = v15.clone();
  v17.value = '7';
  v17.geometry.offset = new mxPoint(0, 42);
  v1.insert(v17);
  const v18 = v15.clone();
  v18.value = '8';
  v18.geometry.offset = new mxPoint(0, 62);
  v1.insert(v18);
  
  const v19 = v15.clone();
  v19.value = 'clk';
  v19.geometry.x = 0.5;
  v19.geometry.y = 1;
  v19.geometry.width = 10;
  v19.geometry.height = 4;
  // NOTE: portConstraint is defined for east direction, so must be inverted here
  v19.style = 'shape=triangle;direction=north;spacingBottom=12;align=center;portConstraint=horizontal;'+
    'fontSize=8;strokeColor=' + opts.strokeColor + ';routingCenterY=0.5;';
  v19.geometry.offset = new mxPoint(-4, -4);
  v1.insert(v19);
}

export { makeMX_8PinIC };