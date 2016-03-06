var app = angular.module('ticTacToeApp', ['HomeCtrl', 'BoardCtrl']);

app.directive('appBoard', function() {
  return {
    templateUrl: '/views/board.html',
    controller: 'BoardController'
  };
});
