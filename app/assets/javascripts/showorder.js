angular.module('orderApp')
  .controller('ShowOrderCtrl', function($stateParams, $location, $scope, Order, Item) {
  	$scope.or = Order.show({id: $stateParams.orderId});
  	//newVar = $scope.newItem.push('user :1');
  	//$scope.newItem = $scope.newItem.push("user: 1");

  	$scope.addItem = function () {
  		//newVar = $scope.newItem;
  		//newVar.user =1;
  		$scope.newItem.order_id =$stateParams.orderId;
  		console.log($scope.newItem);

  		//$scope.newItem = $scope.newItem.push({user: 1});
    Item.create({item: $scope.newItem}, function(){

    }, function(error){
      console.log(error)
  });
 }



});





