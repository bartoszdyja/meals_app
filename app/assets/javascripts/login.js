angular.module('orderApp')
  .controller('LoginCtrl', function($scope, $alert, $auth) {
    
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
    };
  });