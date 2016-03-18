/**
 * @module visController
 * @class visController
 *
 * Notifications for mentorships are dealt with here.
 */

angular.module('chemGeno')

  .controller('visController', ['$scope', 'searchService',
    function($scope, searchService) {

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


      var node = [ 'Please enter a search above' ];
      // Automatically label each of the nodes
      node.forEach(function(name){
        g.setNode(name, { label: name });
      });

      var edges = [];
      edges.forEach(function(edge) {
        g.setEdge(edge.u, edge.v, edge.value); });

      var svg = d3.select("svg");
      var container = svg.select("g");
      // Set up zoom support
      var zoom = d3.behavior.zoom().on("zoom", function() {
      container.attr("transform", "translate(" + d3.event.translate + ")" +
                                  "scale(" + d3.event.scale + ")");
      });
      // to enable zoom uncomment the line below
      //svg.call(zoom);

      var render = new dagreD3.render();


      render(container, g);
      dagre.layout(g);
      // Center the graph
      var initialScale = 1.25;
      zoom
        .translate([425, 20])
        .scale(initialScale)
        .event(svg);


      $scope.target = [];
      $scope.mentors = [];
      $scope.mentored = [];
      $scope.supervisors = [];
      $scope.supervised = [];

      // probably should've just put institutions with people
      $scope.$on('search:response', function(event,data) {
         $scope.clearResults();
         //Cleanup old graph
         var svg = d3.select("svg > g");
         svg.selectAll("*").remove();


         var targetInstitution =
            $scope.findInstitution(data.target.institution_id, data.institutions);
         var _target = {
          name: data.target.name,
          institution: targetInstitution,
          position: data.target.position,
          id: data.target.id
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
            position: _mentor_.position,
            id: _mentor_.id
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
            position: _mentor_.position,
            id: _mentor_.id
          };
          toPush.push(mentor)
        }
        $scope.mentored = toPush;

        var toPush = [];
        for(var i = 0; i < data.supervised.length; i++) {
          var _supervisor_ = data.supervised[i];
          var inst = $scope.findInstitution(_supervisor_.institution_id,
            data.institutions);
          console.log(inst)
          var mentor = {
            name: _supervisor_.name,
            institution: inst,
            position: _supervisor_.position,
            id: _supervisor_.id
          };
          toPush.push(mentor)
        }
        $scope.supervised = toPush;

        var toPush = [];
        for(var i = 0; i < data.supervisors.length; i++) {
          var _supervisor_ = data.supervisors[i];
          var inst = $scope.findInstitution(_supervisor_.institution_id,
            data.institutions);
          console.log(inst)
          var mentor = {
            name: _supervisor_.name,
            institution: inst,
            position: _supervisor_.position,
            id: _supervisor_.id
          };
          toPush.push(mentor)
        }
        $scope.supervisors = toPush;

         var g = new dagre.graphlib.Graph().setGraph({

             nodesep: 75,
             ranksep: 150,
             rankdir: "TB",
             marginx: 20,
             marginy: 20
         });


         // Automatically label each of the nodes
         //pastel blue
         $scope.supervisors.forEach(function(v) {
           console.log(v.name);
           g.setNode(v.name, { label: v.name, style: "fill: #AEC6CF"});
         });
         //pastel purple
         $scope.mentors.forEach(function(v) {
           console.log(v.name);
           g.setNode(v.name, { label: v.name, style: "fill: #B19CD9"});
         });

         $scope.target.forEach(function(v) {
           console.log(v.name);
           g.setNode(v.name, { label: v.name, style: "fill: #f77"});
         });

         $scope.mentored.forEach(function(v) {
           console.log(v.name);
           g.setNode(v.name, { label: v.name, style: "fill: #B19CD9"});
         });
         $scope.supervised.forEach(function(v) {
           console.log(v.name);
           g.setNode(v.name, { label: v.name, style: "fill: #AEC6CF"});
         });

         // Automatically create edges
         $scope.mentors.forEach(function(node){
           g.setEdge(node.name, _target.name, { });
         });

         $scope.supervisors.forEach(function(node){
           g.setEdge(node.name, _target.name, { });
         });

         $scope.supervised.forEach(function(node){
           g.setEdge(_target.name, node.name, { });
         });

         $scope.mentored.forEach(function(node){
           g.setEdge(_target.name, node.name, { });
         });

         g.nodes().forEach(function(v) {
              console.log("Node " + v + ": " + JSON.stringify(g.node(v)));
         });
         g.edges().forEach(function(e) {
             console.log("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(g.edge(e)));
         });
         // Set some general styles
         g.nodes().forEach(function(v) {
           var node = g.node(v);
           node.rx = node.ry = 5;
         });


         dagre.layout(g);
         render(container, g);

         var upper = $scope.mentors.concat($scope.supervisors);
         var lower = $scope.mentored.concat($scope.supervised);
         var lengths = [];
         lengths.push(upper.length);
         lengths.push(lower.length);

         var maxnode = Math.max.apply(Math, lengths);
         // Center the graph
         var initialScale = 1.15;
         zoom
           .translate([1100/(maxnode + 1), 20])
           .scale(initialScale)
           .event(svg);
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


}]);
