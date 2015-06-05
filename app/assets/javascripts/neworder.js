angular.module('orderApp')
  .controller("NewOrderCtrl", ['$scope', '$resource', 'Order', '$location', function($scope, $resource, Order, $location) {
  $scope.addOrder = function () {
    Order.create( function(order){
        $location.path('/showorder/'+order.id);
    }, function(error){
      console.log(error)
  });
 }
 $scope.orders = Order.index();
}]);