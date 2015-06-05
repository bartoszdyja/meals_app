angular.module('orderApp', ['ngResource', 'ngMessages', 'ui.router', 'mgcrea.ngStrap', 'satellizer', 'ngLoadingSpinner'])

  .factory("Order", function($resource) {
    return $resource("/api/orders/:id", { id: "@id" },
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

  .config(function($stateProvider, $urlRouterProvider, $authProvider) {
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
      .state('new', {
        url: '/new',
        templateUrl: 'templates/new.html',
        controller: 'CreateCtrl'
      })
      .state('logout', {
        url: '/logout',
        template: null,
        controller: 'LogoutCtrl'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'partials/profile.html',
        controller: 'ProfileCtrl',
        resolve: {
          authenticated: function($q, $location, $auth) {
            var deferred = $q.defer();

            if (!$auth.isAuthenticated()) {
              $location.path('/');
            } else {
              deferred.resolve();
            }

            return deferred.promise;
          }
        }
      });

    $urlRouterProvider.otherwise('/');

    $authProvider.facebook({
      clientId: '792920127488625'
    });

  });
