angular.module('chemGeno')
  .controller('visController', ['$scope', 'searchService',
    function($scope, searchService) {
      $scope.target = [];
      $scope.mentors = [];
      $scope.mentored = [];
      $scope.supervisors = [];
      $scope.supervised = [];

      // probably should've just put institutions with people
      $scope.$on('search:response', function(event,data) {
        $scope.clearResults();


         var targetInstitution =
             $scope.findInstitution(data.target.institution_id, data.institutions);
         var _target = {
           name: data.target.name,
           institution: targetInstitution,
           position: data.target.position
         };
         $scope.target.push(_target);
         // TODO: refactor method into sub methods
         var toPush = [];
         for(var i = 0; i < data.mentors.length; i++) {
           var _mentor_ = data.mentors[i];
           var inst = $scope.findInstitution(_mentor_.institution_id,
             data.institutions);

           var mentor = {
             name: _mentor_.name,
             institution: inst,
             position: _mentor_.position
           };
           toPush.push(mentor)
         }
         $scope.mentors = toPush;

         var toPush = [];
         for(var i = 0; i < data.mentored.length; i++) {
           var _mentor_ = data.mentored[i];
           var inst = $scope.findInstitution(_mentor_.institution_id,
             data.institutions);

           var mentor = {
             name: _mentor_.name,
             institution: inst,
             position: _mentor_.position
           };
           toPush.push(mentor)
         }
         $scope.mentored = toPush;

         var toPush = [];
         for(var i = 0; i < data.supervised.length; i++) {
           var _supervisor_ = data.supervised[i];
           var inst = $scope.findInstitution(_supervisor_.institution_id,
             data.institutions);

           var mentor = {
             name: _supervisor_.name,
             institution: inst,
             position: _supervisor_.position
           };
           toPush.push(_supervisor_)
         }
         $scope.supervised = toPush;

         var toPush = [];
         for(var i = 0; i < data.supervisors.length; i++) {
           var _supervisor_ = data.supervisors[i];
           var inst = $scope.findInstitution(_supervisor_.institution_id,
             data.institutions);

           var mentor = {
             name: _supervisor_.name,
             institution: inst,
             position: _supervisor_.position
           };
           toPush.push(_supervisor_)
         }
         $scope.supervisors = toPush;

      });

      $scope.findInstitution = function(id, institutions) {
        for(var i = 0; i < institutions.length; i++){
          if (institutions[i].id === id) {
            return institutions[i].name;
          }
        }
      }

      $scope.clearResults = function() {
        $scope.target = [];
        $scope.mentors = [];
        $scope.mentored = [];
        $scope.supervisors = [];
        $scope.supervised = [];
      }

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



    // Preparation of DagreD3 data structures
    var g = new dagreD3.graphlib.Graph().setGraph({
        nodesep: 30,
        ranksep: 150,
        rankdir: "TB",
        marginx: 20,
        marginy: 20
    });

    //two nodes, two paths NOTE THE INCLUDED 'weight' element for edges
    var nodes = [ 'Todd L. Lowary', 'Ole Hindsgaul' ];
    // Automatically label each of the nodes
    nodes.forEach(function(name) {
      //namecode = name.split(' ').join('')
      g.setNode(name, { label: name });
    });

    var edges = [{u:'Ole Hindsgaul',v:'Todd L. Lowary',value:{label:''}}];
    edges.forEach(function(edge) {
      g.setEdge(edge.u, edge.v, edge.value); });

    var render = new dagreD3.render();
    // Set graph height and init zoom
    var svg = d3.select("svg");
    var container = svg.select("g");

    render(container, g);
    svg.attr("height", $scope.windowHeight);


    // Set up an SVG group so that we can translate the final graph.
    var svg = d3.select('svg'),
        svgGroup = svg.append('g');


    dagre.layout(g);
    // Run the renderer. This is what draws the final graph.


}]);
