angular.module('orderApp')
  .controller('HomeCtrl', function($scope, $auth, $location, Order) {
    $scope.orders = Order.index();
    $scope.checkboxModel = {
       value : ''
     };
    $scope.addOrder = function () {
    Order.create( function(order){
        $location.path('/showorder/'+order.id);
    }, function(error){
      console.log(error)
    });
   }
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    }
   });
