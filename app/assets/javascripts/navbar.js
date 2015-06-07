angular.module('orderApp')
  .controller('NavbarCtrl', function($scope, $auth, User) {
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };
  });