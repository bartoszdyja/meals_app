angular.module('orderApp')
  .controller('LoginCtrl', function($scope, $alert, $auth, User) {
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
    }
  });
