app.controller('MainController',
  ['$scope', function($scope) {
    $scope.title = 'Shopping Cart';
    $scope.promo = 'DEALS';

    $scope.products = [
    {
      name: 'The Book of Trees',
      price: 19,
      pubdate: new Date('2014', '03', '08'),
      cover: 'img/the-book-of-trees.jpg'
    },
    {
      name: 'Program or be Programmed',
      price: 8,
      pubdate: new Date('2013', '08', '01'),
      cover: 'img/program-or-be-programmed.jpg'
    },
    {
      name: 'The wild life',
      price: 24,
      pubdate: new Date('2011', '12', '08'),
      cover: 'img/the-book-of-trees.jpg'
    },
    {
      name: 'Prison break',
      price: 4,
      pubdate: new Date('2005', '01', '01'),
      cover: 'img/program-or-be-programmed.jpg'
    }
  ];

  }]
);
