(function(){
  'use strict';

  var app = angular.module('myApp', ['MainCtrl', 'ngRoute', 'ngAnimate']);
  var appCtrl = angular.module('MainCtrl', []);

  // Config App Ctrl
  app.config(function($routeProvider){
    $routeProvider
      .when("/", {
        templateUrl: '/views/main.html',
        activetab: '/'
      })
      .when("/work", {
        templateUrl: '/views/work.html',
        controller:'ProjectCtrl',
        controllerAs:'project',
        activetab: 'work'
      })
      .when("/work/:id", {
        templateUrl: '/views/partials/project.html'
      })
      .when("/about", {
        templateUrl: '/views/about.html',
        activetab: 'about'
      })
      .when("/contact", {
        templateUrl: '/views/contact.html',
        activetab: 'contact'
      })
      .otherwise({redirectTo: '/'});
  });

  // Main Ctrl for projects
  appCtrl.controller('MainCtrl',['$scope', '$route', function($scope, $route){
    $scope.$route = $route;
  }]);

  appCtrl.controller('ProjectCtrl', ['$scope', '$http', function($scope, $http){
    $scope.projects = [];
    return $http.get('/scripts/projects.json').then(function(response){
      return $scope.projects = response.data;
    });
  }]);

})();
