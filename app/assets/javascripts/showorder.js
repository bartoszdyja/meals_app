angular.module('orderApp')
  .controller('ShowOrderCtrl', function($stateParams, $location, $scope, Order) {
  	$scope.or = Order.show({id: $stateParams.orderId});
});