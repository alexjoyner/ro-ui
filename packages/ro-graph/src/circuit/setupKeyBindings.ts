export const setupKeyBindings = (graph, mxApi) => {
  var keyHandler = new mxApi.mxKeyHandler(graph);
  keyHandler.bindKey(8, function(evt)
  {
    if (graph.isEnabled())
    {
      graph.removeCells();
    }
  });
  keyHandler.bindKey(46, function(evt)
  {
    if (graph.isEnabled())
    {
      graph.removeCells();
    }
  });

}