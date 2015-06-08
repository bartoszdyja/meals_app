angular.module('orderApp', ['ngResource', 'ngMessages', 'ui.router', 'mgcrea.ngStrap', 'satellizer'])

  .factory("User", function($resource) {
    return $resource("/profile", {},
      {
      
      'show':    { method: 'GET', isArray: false },
      'create':  { method: 'POST'}
      }
    );
  })

  .factory("Order", function($resource) {
    return $resource("/api/orders/:id", { id: "@id" },
      {
      
      'index':   { method: 'GET', isArray: true },
      'show':    { method: 'GET', isArray: false },
      'create':  { method: 'POST'},
      'update':  { method: 'PUT'}
      }
    );
  })

  .factory("Item", function($resource) {
    return $resource("/api/items/:id", { id: "@id" },
      {
      
      'index':   { method: 'GET', isArray: true },
      'show':    { method: 'GET', isArray: false },
      'create':  { method: 'POST'}
      }
    );
  })

  .config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] =
    $('meta[name=csrf-token]').attr('content');
  })




  .config(function($stateProvider, $urlRouterProvider, $authProvider, $locationProvider) {
    $stateProvider
      .state('home', {  
            url: '/',
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl' 
      })

      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      })

      .state('newOrder', {
        url: '/neworder',
        templateUrl: 'templates/neworder.html',
        controller: 'NewOrderCtrl'
      })

      .state('showOrder', {
        url: '/showorder/:orderId',
        templateUrl: 'templates/showorder.html',
        controller: 'ShowOrderCtrl'
      })
      
      .state('logout', {
        url: '/logout',
        template: null,
        controller: 'LogoutCtrl'
      });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode({
      enabled: true
    });

    $authProvider.facebook({
      clientId: '792920127488625'
    });

  })

  .run(['$rootScope', '$state', '$stateParams',
  function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);