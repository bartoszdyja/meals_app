angular.module('orderApp')
  .controller('ShowOrderCtrl', function($stateParams, $location, $scope, $auth, Order, Item) {
  	$scope.order = Order.show({id: $stateParams.orderId});
  	//newVar = $scope.newItem.push('user :1');
  	//$scope.newItem = $scope.newItem.push("user: 1");

  	$scope.addItem = function () {
  		$scope.newItem.order_id =$stateParams.orderId;
  		console.log($scope.newItem);

  		//$scope.newItem = $scope.newItem.push({user: 1});
    Item.create({item: $scope.newItem}, function(){
      $scope.order = Order.show({id: $stateParams.orderId});  

    }, function(error){
      console.log(error)
  });
 }

 $scope.finalizeOrder = function() {
    
    Order.update({id:$stateParams.orderId, finalized:true})
    {
      $scope.order = Order.show({id: $stateParams.orderId});
    };
 }

 $scope.orderOrder = function() {
    
    Order.update({id:$stateParams.orderId, ordered:true})
    {
      $scope.order = Order.show({id: $stateParams.orderId});
    }
 }

  $scope.deliverOrder = function() {
    
    Order.update({id:$stateParams.orderId, delivered:true})
    {
      $scope.order = Order.show({id: $stateParams.orderId});
    }
 }

 $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };


});





