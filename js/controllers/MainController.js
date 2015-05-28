app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    }
  ];
  $scope.mains = [
    {
      name: 'Citrus Chicken Sorrento',
      description: 'Tender, grilled chicken breast in a citrus honey glaze, inspired by the Italian city of Sorrento, famous for its lemon groves. Served with lightly seasoned broccoli, artichokes and roasted vegetables.',
      price: 11.49
    },
    {
      name: 'Garden Primavera',
      description: 'Roasted zucchini, red bell peppers, onions and tomatoes tossed with tri-colored vegetable penne in homemade basil pesto and marinara sauce.',
      price: 8.99
    },
    {
      name: 'Ravioli di Portobello',
      description: 'Ravioli filled with portobello mushrooms, topped with a creamy, smoked cheese and sun-dried tomato sauce.',
      price: 9.79
    }
  ];
  $scope.extras = [
    {
      name: 'Zuppa Toscana',
      description: 'Spicy sausage, fresh kale and russet potatoes in a creamy broth.',
      price: 5.49
    },
    {
      name: 'Pasta e Fagioli',
      description: 'White and red beans, ground beef, tomatoes and pasta in a savory broth.',
      price: 5.49
    },
    {
      name: 'Minestrone',
      description: 'Hearty vegetables like spinach, zucchini, carrots and celery simmer with northern beans and shell pasta in a light tomato broth.',
      price: 5.49
    }
  ];
}]);
