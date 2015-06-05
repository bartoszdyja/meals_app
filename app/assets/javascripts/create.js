angular.module('orderApp')
	.controller("CreateCtrl", ['$scope', '$resource', 'Order', '$location', function($scope, $resource, Order, $location) {
  $scope.save = function () {
    if ($scope.orderForm.$valid){
      Order.create({order: $scope.newOrder}, function(){
      $location.path('/');
    }, function(error){
      console.log(error)
    });
  }
 }
}]);