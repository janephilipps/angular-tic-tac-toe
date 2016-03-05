var app = angular.module('ticTacToeApp', []);

app.controller('BoardCtrl', ['$scope', function($scope) {

    $scope.board = {
        size: 3,
        board: []
    };

    $scope.resetBoard = function() {
        $scope.board.board = [];
        for (var i = 0; i < $scope.board.size; i++) {
            var row = [];
            $scope.board.board.push(row);
            for (var j = 0; j < $scope.board.size; j++) {
                row.push('');
            }
        }
    }

    $scope.resetBoard();

    var turns = 0;

    $scope.gameMessage = 'Let\'s Play! X goes first.'

    $scope.playerMove = function(rowIndex, colIndex) {

        if (turns == Math.pow($scope.board.size, 2)) {
            return;
        }
        if ($scope.board.board[rowIndex][colIndex] == '') {
            if (turns % 2 == 0) {
                $scope.board.board[rowIndex][colIndex] = 'X';
                turns += 1;
                getWinner();
            } else {
                $scope.board.board[rowIndex][colIndex] = 'O';
                turns += 1;
                getWinner();
            }
        }
    }

    var getWinner = function() {

        for (var i = 0; i < $scope.board.board.length; i++) {
            var rowWinner = checkRow(i);
            if (rowWinner) {
                console.log('row ' + rowWinner);
            }

            var colWinner = checkCol(i);
            if (colWinner) {
                console.log('col ' + colWinner);
            }
        }

        var diagWinner = checkLeftDiag() || checkRightDiag();
        if (diagWinner) {
            console.log('diag ' + diagWinner);
        }
    }

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
    }

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
    }

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
    }

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
    }

}]);

app.directive('appBoard', function() {
  return {
    templateUrl: '/views/board.html',
    controller: 'BoardCtrl'
  };
});