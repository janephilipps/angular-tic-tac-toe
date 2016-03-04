var app = angular.module('ticTacToeApp', []);

app.controller('BoardCtrl', ['$scope', function($scope) {

    $scope.board = {
        rows: 3,
        columns: 3,
        board: [['X','O','X'],
                ['O','X','O'],
                ['O','O','X']]
    };

    $scope.playerMove = function($index) {
        console.log($index);
    }

}]);

app.directive('appBoard', function() {
  return {
    templateUrl: '/views/board.html',
    controller: 'BoardCtrl'
  };
});