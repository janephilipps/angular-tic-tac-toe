var app = angular.module('ticTacToeApp', []);

app.controller('HomeCtrl', ['$scope', function($scope) {

    $scope.boards = 1;

    $scope.getBoardNumber = function(boards) {
        return new Array(boards);
    }

    $scope.addBoard = function() {
        $scope.boards += 1;
    };
}]);

app.controller('BoardCtrl', ['$scope', function($scope) {

    $scope.board = {
        size: 3,
        board: []
    };

    $scope.resetBoard = function() {
        $scope.turns = 0;
        $scope.winner = '';
        $scope.draw = false;
        $scope.gameMessage = 'Let\'s Play! X goes first.';
        $scope.board.board = [];
        for (var i = 0; i < $scope.board.size; i++) {
            var row = [];
            $scope.board.board.push(row);
            for (var j = 0; j < $scope.board.size; j++) {
                row.push('');
            }
        }
    };

    $scope.resetBoard();

    $scope.playerMove = function(rowIndex, colIndex) {

        if ($scope.winner || $scope.draw) {
            $scope.gameMessage = $scope.gameMessage + '!';
            return;
        }

        if ($scope.board.board[rowIndex][colIndex] == '') {
            if ($scope.turns % 2 == 0) {
                $scope.board.board[rowIndex][colIndex] = 'X';
                $scope.gameMessage = 'O goes next.';
            } else {
                $scope.board.board[rowIndex][colIndex] = 'O';
                $scope.gameMessage = 'X goes next.';

            }
            $scope.turns += 1;
            var winner = getWinner();
            if (winner) {
                $scope.winner = winner;
                $scope.gameMessage = $scope.winner + ' wins!';
                return;
            }
            if (!winner && $scope.turns == Math.pow($scope.board.size, 2)) {
                $scope.draw = true;
                $scope.gameMessage = 'It\'s a draw!';
            }
        }
    };

    var getWinner = function() {

        for (var i = 0; i < $scope.board.board.length; i++) {
            var rowWinner = checkRow(i);
            if (rowWinner) {
                return rowWinner;
            }

            var colWinner = checkCol(i);
            if (colWinner) {
                return colWinner;
            }
        }

        var diagWinner = checkLeftDiag() || checkRightDiag();
        if (diagWinner) {
            return diagWinner;
        }
    };

    var checkRow = function(rowIndex) {

        for (var i = 0; i < $scope.board.board[rowIndex].length - 1; i++){
            if ($scope.board.board[rowIndex][i] == '') {
                return;
            }
            if ($scope.board.board[rowIndex][i] != $scope.board.board[rowIndex][i + 1]) {
                return;
            }
        }
        return $scope.board.board[rowIndex][i];
    };

    var checkCol = function(colIndex) {
        for (var i = 0; i < $scope.board.board[colIndex].length - 1; i++) {
            if ($scope.board.board[i][colIndex] == '') {
                return;
            }
            if ($scope.board.board[i][colIndex] != $scope.board.board[i + 1][colIndex]) {
                return;
            }
        }
        return $scope.board.board[i][colIndex];
    };

    var checkLeftDiag = function () {
        for (var i = 0; i < $scope.board.board.length - 1; i++) {
            if ($scope.board.board[i][i] == '') {
                return;
            }
            if ($scope.board.board[i][i] != $scope.board.board[i + 1][i + 1]) {
                return;
            }
        }
        return $scope.board.board[0][0];
    };

    var checkRightDiag = function() {
        for (var i = 0; i < $scope.board.board.length - 1; i++) {
            if ($scope.board.board[i][$scope.board.board.length - 1] == '') {
                return;
            }
            if ($scope.board.board[i][$scope.board.board.length - (i + 1)] != $scope.board.board[i + 1][$scope.board.board.length - (i + 2)]) {
                return;
            }
        }
        return $scope.board.board[0][$scope.board.board.length - 1];
    };

}]);

app.directive('appBoard', function() {
  return {
    templateUrl: '/views/board.html',
    controller: 'BoardCtrl'
  };
});