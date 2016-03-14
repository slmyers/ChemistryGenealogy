angular.module('chemGeno')
.controller('visController', ['$scope',
function($scope) {
  // current window dimensions
  $scope.windowWidth = window.innerWidth;
  $scope.windowHeight = window.innerHeight;

  $scope.estimatedVisW = 0;
  $scope.estimatedVisH  = 0;

  // estimates the dimensions of the vis flexbox
  // not perfect but < 10% error
  $scope.estimateDimensions = function() {
    // #searchContainer.min-height: 80vh;
    $scope.estimatedVisH = 0.8*$scope.windowHeight;
    $scope.estimatedVisW = 0.7*$scope.windowWidth - 0.02*$scope.windowWidth - 50;
  };

  $scope.estimateDimensions();

  var height = 900;

  // Preparation of DagreD3 data structures
  var g = new dagreD3.graphlib.Graph().setGraph({
      nodesep: 30,
      ranksep: 150,
      rankdir: "TB",
      marginx: 20,
      marginy: 20
    });

  //two nodes, two paths NOTE THE INCLUDED 'weight' element for edges
var nodes = [ 'ToddLLowary', 'OleHindsgaul' ];
// Automatically label each of the nodes
nodes.forEach(function(name) {
  namecode = name.split(' ').join('')
  g.setNode(namecode, { label: name });
});

var edges = [{u:'OleHindsgaul',v:'ToddLLowary',value:{label:'O to T'}}];
edges.forEach(function(edge) {
  g.setEdge(edge.u, edge.v, edge.value); });

  var render = new dagreD3.render();
  // Set graph height and init zoom
  var svg = d3.select("svg");
  var container = svg.select("g");

  render(container, g);
  svg.attr("height", height);


// Set up an SVG group so that we can translate the final graph.
var svg = d3.select('svg'),
    svgGroup = svg.append('g');

// Set up zoom support
var zoom = d3.behavior.zoom().on("zoom", function() {
      svgGroup.attr("transform", "translate(" + d3.event.translate + ")" +
                                  "scale(" + d3.event.scale + ")");
    });
svg.call(zoom);

dagre.layout(g);
// Run the renderer. This is what draws the final graph.



// Center the graph
var initialScale = 0.75;
zoom
  .translate([(svg.attr("width") - g.graph().width * initialScale) / 2, 20])
  .scale(initialScale)
  .event(svg);
svg.attr('height', g.graph().height * initialScale + 40);
}]);
