angular.module('orderApp')
  .controller('HomeCtrl', function($scope, $auth, Order) {
    $scope.orders = Order.index();
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };

    
  });