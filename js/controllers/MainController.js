app.controller('MainController',
  ['$scope', function($scope) {
    $scope.title = 'Shopping Cart';
    $scope.promo = 'DEALS';
    $scope.product = {
      name: 'The Book of Trees',
      price: 19
    };
  }]
);
