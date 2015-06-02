angular.module('orderApp', ['ngResource', 'ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html'
      });

    $urlRouterProvider.otherwise('/sadfsdf');
})

.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
}]);