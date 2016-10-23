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

  $scope.remove = function (index) {
    $scope.items.splice(index, 1);
  }

  $scope.total = function () {
    return $scope.items.reduce(function (prev, item) {
      return prev + (item.price * item.quantity);
    }, 0);
  }

  $scope.change = function (index, increasing) {
    var item = $scope.items[index];
    var current = item.quantity;    
    if (increasing) {
      if (current == item.max_order) {
        item.error = 'The quantity is not allowed';
      }
      item.quantity++;
    } else {
      if (current == 0) {
        item.error = 'The quantity is not allowed';
      }
      item.quantity--;
    }
    current = item.quantity;
    if (current < 0 || current > item.max_order) {
      item.error = 'The quantity is not allowed';
    } else {
      item.error = '';
    }
  }
});