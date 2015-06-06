angular.module('orderApp')
  .controller('HomeCtrl', function($scope, $auth, $location, Order) {
    $scope.addOrder = function () {
    Order.create( function(order){
        $location.path('/showorder/'+order.id);
	}, function(error){
      console.log(error)
  });
 }

    $scope.orders = Order.index();
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };

    
  });