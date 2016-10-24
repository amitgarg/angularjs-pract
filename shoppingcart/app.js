var myapp = angular.module('myApp', []);
myapp.controller("MainCtrl", function ($scope) {
  $scope.items = [{
    title: 'camera',
    quantity: 1,
    price: 25000,
    max_order: 5
  }, {
    title: 'tv',
    quantity: 1,
    price: 30000,
    max_order: 4
  }, {
    title: 'fridge',
    quantity: 1,
    price: 20000,
    max_order: 3
  }, {
    title: 'washing machine',
    quantity: 1,
    price: 2500,
    max_order: 2
  }];

  $scope.$watch('calculateTotal', function(){
    $scope.startCalculating();   
    $scope.calculateTotal = false;
  })

  $scope.startCalculating = function(){
    var error = $scope.items.some(item => item.error);
    if(error){
      $scope.total = '';
      $scope.totalError = "Some of the item quantity is not valid";
    }else{
      $scope.totalError ='';
       $scope.total = $scope.items.reduce(function (prev, item) {
        return prev + (item.price * item.quantity);
      }, 0);
    }
  }

  $scope.remove = function (index) {
    $scope.items.splice(index, 1);
  }

  $scope.change = function (index, increasing) {
    var item = $scope.items[index];
    increasing ? item.quantity++ : item.quantity--;
    var current = item.quantity;
    if (current < 0 || current > item.max_order) {
      item.error = 'invalid quantity';
    } else {
      item.error = '';
    }
  }
});