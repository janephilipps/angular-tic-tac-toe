var app = angular.module('ticTacToeApp', []);

app.controller('BoardCtrl', ['$scope', function($scope) {

    $scope.board = {
        size: 3,
        board: [['','',''],
                ['','',''],
                ['','','']]
    };

    var turns = 0;

    $scope.gameMessage = 'Let\'s Play! X goes first.'

    $scope.playerMove = function(rowIndex, colIndex) {

        if (turns % 2 == 0) {
            if (turns == Math.pow($scope.board.size, 2)) {
                return;
            }
            if ($scope.board.board[rowIndex][colIndex] == '') {
                $scope.board.board[rowIndex][colIndex] = 'X';
                turns += 1;
            }
        } else {
            if (turns == Math.pow($scope.board.size, 2)) {
                return;
            }
            if ($scope.board.board[rowIndex][colIndex] == '') {
                $scope.board.board[rowIndex][colIndex] = 'O';
                turns += 1;
            }
        }
    }

}]);

app.directive('appBoard', function() {
  return {
    templateUrl: '/views/board.html',
    controller: 'BoardCtrl'
  };
});