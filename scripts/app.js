(function(){
  'use strict';

  var app = angular.module('myApp', ['MainCtrl', 'ngRoute', 'ngAnimate'])

  app.config(function($routeProvider){
      $routeProvider
        .when("/", {
          templateUrl: '/views/main.html',
          controller:'ProjectCtrl',
          controllerAs:'project',
          activetab: '/'
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
})();
