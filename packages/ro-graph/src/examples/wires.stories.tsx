import React, { useEffect } from 'react';
import { makeGraph, update } from '../utils/makeGraph';
import { applyWireStyles } from '../utils/styleGraph';
import { registerShape } from '../utils/registerShape';
import { MxResistor } from '../circuit/MxResistor';
import { makeMX_8PinIC } from '../circuit/Mx8PinIC';
import { withWireConnections } from '../circuit/withWireConnections';
import './styles/wire-styles.css';

export default { title: 'ro-graph/Wires' };

export const BasicWires = () => {
	useEffect(() => {
		const container = document.getElementById('HelloWorldExample')
		const { graph, parent, mxApi } = makeGraph({}, container);
		// If connect preview is not moved away then getCellAt is used to detect the cell under
		// the mouse if the mouse is over the preview shape in IE (no event transparency), ie.
		// the built-in hit-detection of the HTML document will not be used in this case.
		mxApi.mxConnectionHandler.prototype.movePreviewAway = false;
		mxApi.mxConnectionHandler.prototype.waypointsEnabled = true;
		mxApi.mxGraph.prototype.resetEdgesOnConnect = false;
		mxApi.mxConstants.SHADOWCOLOR = '#C0C0C0';
		var joinNodeSize = 7;
		var strokeWidth = 2;
		
		// Replaces the port image
		mxApi.mxConstraintHandler.prototype.pointImage = new mxApi.mxImage('images/dot.gif', 10, 10);
		
		// Enables guides
		mxApi.mxGraphHandler.prototype.guidesEnabled = true;
		
	    // Alt disables guides
	    mxApi.mxGuide.prototype.isEnabledForEvent = function(evt)
	    {
	    	return !mxApi.mxEvent.isAltDown(evt);
	    };
		
		// Enables snapping waypoints to terminals
		mxApi.mxEdgeHandler.prototype.snapToTerminals = true;

		graph.view.scale = 1;
		// graph.setPanning(true);
		graph.setConnectable(true);
		graph.setConnectableEdges(true);
		graph.setDisconnectOnMove(false);
		graph.foldingEnabled = false;

		//Maximum size
		graph.maximumGraphBounds = new mxApi.mxRectangle(0, 0, 500, 500)
		graph.border = 50;

		// Panning handler consumed right click so this must be
		// disabled if right click should stop connection handler.
		graph.panningHandler.isPopupTrigger = function() { return false; };
		
		// Enables return key to stop editing (use shift-enter for newlines)
		graph.setEnterStopsCellEditing(true);

		// Adds rubberband selection
		new mxApi.mxRubberband(graph);
		
		// Alternative solution for implementing connection points without child cells.
		// This can be extended as shown in portrefs.html example to allow for per-port
		// incoming/outgoing direction.
		graph.getAllConnectionConstraints = function(terminal)
		{
			 var geo = (terminal != null) ? this.getCellGeometry(terminal.cell) : null;

			 if ((geo != null ? !geo.relative : false) &&
				 this.getModel().isVertex(terminal.cell) &&
				 this.getModel().getChildCount(terminal.cell) == 0)
			 {
				return [new mxApi.mxConnectionConstraint(new mxApi.mxPoint(0, 0.5), false),
						new mxApi.mxConnectionConstraint(new mxApi.mxPoint(1, 0.5), false)];
				}

			return null;
		};

		// Makes sure non-relative cells can only be connected via constraints
		graph.connectionHandler.isConnectableCell = function(cell)
		{
			if (this.graph.getModel().isEdge(cell))
			{
				return true;
			}
			else
			{
				var geo = (cell != null) ? this.graph.getCellGeometry(cell) : null;
				
				return (geo != null) ? geo.relative : false;
			}
		};
		mxApi.mxEdgeHandler.prototype.isConnectableCell = function(cell)
		{
			return graph.connectionHandler.isConnectableCell(cell);
		};
		
		// Adds a special tooltip for edges
		graph.setTooltips(true);

		var getTooltipForCell = graph.getTooltipForCell;
		graph.getTooltipForCell = function(cell)
		{
			var tip = '';
			
			if (cell != null)
			{
				var src = this.getModel().getTerminal(cell, true);
				
				if (src != null)
				{
					tip += this.getTooltipForCell(src) + ' ';
				}
				
				var parent = this.getModel().getParent(cell);
				
				if (this.getModel().isVertex(parent))
				{
					tip += this.getTooltipForCell(parent) + '.';
				}

				tip += getTooltipForCell.apply(this, arguments);
				
				var trg = this.getModel().getTerminal(cell, false);
				
				if (trg != null)
				{
					tip += ' ' + this.getTooltipForCell(trg);
				}
			}

			return tip;
		};

		// Switch for black background and bright styles
		var invert = false;
		
		if (invert)
		{
			container.style.backgroundColor = 'black';
			
			// White in-place editor text color
			mxApi.mxCellEditorStartEditing = mxApi.mxCellEditor.prototype.startEditing;
			mxApi.mxCellEditor.prototype.startEditing = function (cell, trigger)
			{
				mxApi.mxCellEditorStartEditing.apply(this, arguments);
				
				if (this.textarea != null)
				{
					this.textarea.style.color = '#FFFFFF';					
				}
			};
			
			mxApi.mxGraphHandler.prototype.previewColor = 'white';
		}


		withWireConnections(mxApi);
		applyWireStyles(graph, { grid: true });
		registerShape(mxApi, 'resistor', MxResistor);
		update(graph, () => {
			var e5 = graph.insertEdge(parent, null, '');
				e5.geometry.setTerminalPoint(new mxApi.mxPoint(10, 10), true);
				e5.geometry.setTerminalPoint(new mxApi.mxPoint(490, 10), false);
			var e6 = graph.insertEdge(parent, null, '');
				e6.geometry.setTerminalPoint(new mxApi.mxPoint(10, 490), true);
				e6.geometry.setTerminalPoint(new mxApi.mxPoint(490, 490), false);
			var v2 = graph.insertVertex(parent, null, 'R1', 220, 220, 80, 20,
				'shape=resistor;verticalLabelPosition=top;verticalAlign=bottom;');
		})
			
			// Starts connections on the background in wire-mode
			var connectionHandlerIsStartEvent = graph.connectionHandler.isStartEvent;
			graph.connectionHandler.isStartEvent = function(me)
			{
				return connectionHandlerIsStartEvent.apply(this, arguments);
			};
			
			// Avoids any connections for gestures within tolerance except when in wire-mode
			// or when over a port
			var connectionHandlerMouseUp = graph.connectionHandler.mouseUp;
			graph.connectionHandler.mouseUp = function(sender, me)
			{
				if (this.first != null && this.previous != null)
				{
					var point = mxApi.mxUtils.convertPoint(this.graph.container, me.getX(), me.getY());
					var dx = Math.abs(point.x - this.first.x);
					var dy = Math.abs(point.y - this.first.y);

					if (dx < this.graph.tolerance && dy < this.graph.tolerance)
					{
						// Selects edges in non-wire mode for single clicks, but starts
						// connecting for non-edges regardless of wire-mode
						if (this.graph.getModel().isEdge(this.previous.cell))
						{
							this.reset();
						}
						
						return;
					}
				}
				
				connectionHandlerMouseUp.apply(this, arguments);
			};
			
			mxApi.mxEvent.disableContextMenu(container);
	}, [])

	return (
		<div id="HelloWorldExample" className="dot-grid"></div>
	)
}
