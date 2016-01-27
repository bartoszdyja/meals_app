angular.module('orderApp')
  .controller('OrdersCtrl', function($scope, Order) {
    $scope.orders = Order.index();
  });
