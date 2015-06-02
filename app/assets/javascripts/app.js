angular.module('orderApp', ['ngResource', 'ui.router', 'ngAnimate', 'mgcrea.ngStrap'])

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
      .state('home', {
        url: '/orders',
        templateUrl: 'templates/home.html'
      });

    $urlRouterProvider.otherwise('/orders');
})

.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
}]);