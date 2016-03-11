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

 // Create a new directed graph
  var g = new dagreD3.graphlib.Graph().setGraph({});

  //two nodes, two paths NOTE THE INCLUDED 'weight' element for edges
var nodes = [ "Todd L Lowary", "Ole Hindsgaul" ];
// Automatically label each of the nodes
nodes.forEach(function(name) { g.setNode(name, { label: name }); });

var edges = [{u:"Ole Hindsgaul",v:"Todd L. Lowary",value:{label:"O to T"}}];
edges.forEach(function(edge) {
  g.setEdge(edge.u, edge.v, edge.value); });

  // Create the renderer
  var render = new dagreD3.render();

// Set up an SVG group so that we can translate the final graph.
var svg = d3.select('svg'),
    svgGroup = svg.append('g');

// Set up zoom support
var zoom = d3.behavior.zoom().on("zoom", function() {
      svgGroup.attr("transform", "translate(" + d3.event.translate + ")" +
                                  "scale(" + d3.event.scale + ")");
    });
svg.call(zoom);


// Run the renderer. This is what draws the final graph.
render(svgGroup, g);

// Center the graph
var xCenterOffset = (svg.attr('width') - layout.graph().width * initialScale) / 2;
svgGroup.attr('transform', 'translate(' + xCenterOffset + ', 20)');
svg.attr('height', layout.graph().height * initialScale + 40);

}]);
