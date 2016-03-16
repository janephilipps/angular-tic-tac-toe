// Define BoardCtrl for individual gameplay
angular.module('BoardCtrl', []).controller('BoardController', ['$scope', function($scope) {

    $scope.size = 3;

    $scope.resetBoard = function() {
        $scope.board = [];
        $scope.turns = 0;
        $scope.winner = '';
        $scope.draw = false;
        $scope.gameMessage = 'Let\'s Play! X goes first.';
        for (var i = 0; i < $scope.size; i++) {
            var row = [];
            for (var j = 0; j < $scope.size; j++) {
                row.push({value: '', winner: ''});
            }
            $scope.board.push(row);
        }
    };

    $scope.resetBoard();

    $scope.playerMove = function(rowIndex, colIndex) {
        // Prevent moves when game is over
        if ($scope.winner || $scope.draw) {
            $scope.gameMessage = $scope.gameMessage + '!';
            return;
        }

        if ($scope.board[rowIndex][colIndex].value == '') {
            if ($scope.turns % 2 == 0) {
                $scope.board[rowIndex][colIndex].value = 'X';
                $scope.gameMessage = 'O goes next.';
            } else {
                $scope.board[rowIndex][colIndex].value = 'O';
                $scope.gameMessage = 'X goes next.';
            }
            $scope.turns += 1;
            var winner = getWinner();
            if (winner) {
                $scope.winner = winner;
                $scope.gameMessage = $scope.winner + ' wins!';
                return;
            }
            if (!winner && $scope.turns == Math.pow($scope.size, 2)) {
                $scope.draw = true;
                $scope.gameMessage = 'It\'s a draw!';
            }
        }
    };

    var getWinner = function() {
        for (var i = 0; i < $scope.board.length; i++) {
            var rowWinner = checkRow(i);
            if (rowWinner) {
                // Track winning squares for animation
                for (var j = 0; j < $scope.board.length; j++) {
                    $scope.board[i][j].winner = 'winner';
                }
                return rowWinner;
            }

            var colWinner = checkCol(i);
            if (colWinner) {
                // Track winning squares for animation
                for (var j = 0; j < $scope.board.length; j++) {
                    $scope.board[j][i].winner = 'winner';
                }
                return colWinner;
            }
        }

        var leftDiagWinner = checkLeftDiag();

        if (leftDiagWinner) {
            // Track winning squares for animation
            for (var j = 0; j < $scope.board.length; j++) {
                $scope.board[j][j].winner = 'winner';
            }
            return leftDiagWinner;
        }

        var rightDiagWinner = checkRightDiag();

        if (rightDiagWinner) {
            // Track winning squares for animation
            for (var j = 0; j < $scope.board.length; j++) {
                $scope.board[j][$scope.board.length - (j + 1)].winner = 'winner';
            }
            return rightDiagWinner;
        }
    };

    var checkRow = function(rowIndex) {
        for (var i = 0; i < $scope.board[rowIndex].length - 1; i++){
            if ($scope.board[rowIndex][i].value == '') {
                return;
            }
            if ($scope.board[rowIndex][i].value != $scope.board[rowIndex][i + 1].value) {
                return;
            }
        }
        return $scope.board[rowIndex][i].value;
    };

    var checkCol = function(colIndex) {
        for (var i = 0; i < $scope.board[colIndex].length - 1; i++) {
            if ($scope.board[i][colIndex].value == '') {
                return;
            }
            if ($scope.board[i][colIndex].value != $scope.board[i + 1][colIndex].value) {
                return;
            }
        }
        return $scope.board[i][colIndex].value;
    };

    var checkLeftDiag = function () {
        for (var i = 0; i < $scope.board.length - 1; i++) {
            if ($scope.board[i][i].value == '') {
                return;
            }
            if ($scope.board[i][i].value != $scope.board[i + 1][i + 1].value) {
                return;
            }
        }
        return $scope.board[0][0].value;
    };

    var checkRightDiag = function() {
        for (var i = 0; i < $scope.board.length - 1; i++) {
            if ($scope.board[i][$scope.board.length - (i + 1)].value == '') {
                return;
            }
            if ($scope.board[i][$scope.board.length - (i + 1)].value != $scope.board[i + 1][$scope.board.length - (i + 2)].value) {
                return;
            }
        }
        return $scope.board[0][$scope.board.length - 1].value;
    };

}]);
