(function(){

  'use strict';

  var appCtrl = angular.module('MainCtrl', []);

  appCtrl.controller('MainCtrl',['$scope', '$route', function($scope, $route){
    $scope.$route = $route;
  }]);

  appCtrl.controller('ProjectCtrl', ['$scope', '$http', function($scope, $http){
    $scope.projects = [];
    return $http.get('/scripts/projects.json').then(function(response){
      return $scope.projects = response.data;
    });
  }]);

  // appCtrl.controller('HeroCtrl', function($scope){
  //   $scope.url = "/assets/imgs/spain.jpg";
  // });

})();
