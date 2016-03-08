angular.module('BoardCtrl', []).controller('BoardController', ['$scope', function($scope) {

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
            for (var j = 0; j < $scope.board.size; j++) {
                row.push({value: '', winner: ''});
            }
            $scope.board.board.push(row);
        }
    };

    $scope.resetBoard();

    $scope.playerMove = function(rowIndex, colIndex) {
        if ($scope.winner || $scope.draw) {
            $scope.gameMessage = $scope.gameMessage + '!';
            return;
        }

        if ($scope.board.board[rowIndex][colIndex].value == '') {
            if ($scope.turns % 2 == 0) {
                $scope.board.board[rowIndex][colIndex].value = 'X';
                $scope.gameMessage = 'O goes next.';
            } else {
                $scope.board.board[rowIndex][colIndex].value = 'O';
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
                for (var j = 0; j < $scope.board.board.length; j++) {
                    $scope.board.board[i][j].winner = 'winner';
                }
                return rowWinner;
            }

            var colWinner = checkCol(i);
            if (colWinner) {
                for (var j = 0; j < $scope.board.board.length; j++) {
                    $scope.board.board[j][i].winner = 'winner';
                }
                return colWinner;
            }
        }

        var leftDiagWinner = checkLeftDiag();

        if (leftDiagWinner) {
            for (var j = 0; j < $scope.board.board.length; j++) {
                $scope.board.board[j][j].winner = 'winner';
            }
            return leftDiagWinner;
        }

        var rightDiagWinner = checkRightDiag();

        if (rightDiagWinner) {
            for (var j = 0; j < $scope.board.board.length; j++) {
                $scope.board.board[j][$scope.board.board.length - (j + 1)].winner = 'winner';
            }
            return rightDiagWinner;
        }
    };

    var checkRow = function(rowIndex) {
        for (var i = 0; i < $scope.board.board[rowIndex].length - 1; i++){
            if ($scope.board.board[rowIndex][i].value == '') {
                return;
            }
            if ($scope.board.board[rowIndex][i].value != $scope.board.board[rowIndex][i + 1].value) {
                return;
            }
        }
        return $scope.board.board[rowIndex][i].value;
    };

    var checkCol = function(colIndex) {
        for (var i = 0; i < $scope.board.board[colIndex].length - 1; i++) {
            if ($scope.board.board[i][colIndex].value == '') {
                return;
            }
            if ($scope.board.board[i][colIndex].value != $scope.board.board[i + 1][colIndex].value) {
                return;
            }
        }
        return $scope.board.board[i][colIndex].value;
    };

    var checkLeftDiag = function () {
        for (var i = 0; i < $scope.board.board.length - 1; i++) {
            if ($scope.board.board[i][i].value == '') {
                return;
            }
            if ($scope.board.board[i][i].value != $scope.board.board[i + 1][i + 1].value) {
                return;
            }
        }
        return $scope.board.board[0][0].value;
    };

    var checkRightDiag = function() {
        for (var i = 0; i < $scope.board.board.length - 1; i++) {
            if ($scope.board.board[i][$scope.board.board.length - (i + 1)].value == '') {
                return;
            }
            if ($scope.board.board[i][$scope.board.board.length - (i + 1)].value != $scope.board.board[i + 1][$scope.board.board.length - (i + 2)].value) {
                return;
            }
        }
        return $scope.board.board[0][$scope.board.board.length - 1].value;
    };

}]);
