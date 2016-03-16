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
            var winningArray = getWinningArray();
            if (winningArray) {
                for (var i = 0; i < winningArray.length; i++) {
                    $scope.board[winningArray[i][0]][winningArray[i][1]].winner = 'winner';
                }
                $scope.winner = $scope.board[winningArray[0][0]][winningArray[0][1]].value;
                $scope.gameMessage = $scope.winner + ' wins!';
                return;
            }
            if (!winningArray && $scope.turns == Math.pow($scope.size, 2)) {
                $scope.draw = true;
                $scope.gameMessage = 'It\'s a draw!';
            }
        }
    };

    var getWinningArray = function() {
        for (var i = 0; i < $scope.board.length; i++) {
            var rowWinner = checkRow(i);
            if (rowWinner) {
                return rowWinner;
            }

            var colWinner = checkCol(i);
            if (colWinner) {
                return colWinner;
            }
        }

        var leftDiagWinner = checkLeftDiag();

        if (leftDiagWinner) {
            return leftDiagWinner;
        }

        var rightDiagWinner = checkRightDiag();

        if (rightDiagWinner) {
            return rightDiagWinner;
        }
    };

    var checkRow = function(rowIndex) {
        var rowWinner = [],
            size = $scope.board.length
        ;
        for (var i = 0; i < size - 1; i++) {
            if ($scope.board[rowIndex][i].value == '') {
                return;
            }
            if ($scope.board[rowIndex][i].value != $scope.board[rowIndex][i + 1].value) {
                return;
            }
            rowWinner.push([rowIndex, i]);
        }
        rowWinner.push([rowIndex, size - 1]);
        return rowWinner;
    };

    var checkCol = function(colIndex) {
        var colWinner = [],
            size = $scope.board.length
        ;
        for (var i = 0; i < size - 1; i++) {
            if ($scope.board[i][colIndex].value == '') {
                return;
            }
            if ($scope.board[i][colIndex].value != $scope.board[i + 1][colIndex].value) {
                return;
            }
            colWinner.push([i, colIndex]);
        }
        colWinner.push([size - 1, colIndex]);
        return colWinner;
    };

    var checkLeftDiag = function () {
        var leftDiagWinner = [],
            size = $scope.board.length
        ;
        for (var i = 0; i < size - 1; i++) {
            if ($scope.board[i][i].value == '') {
                return;
            }
            if ($scope.board[i][i].value != $scope.board[i + 1][i + 1].value) {
                return;
            }
            leftDiagWinner.push([i,i]);
        }
        leftDiagWinner.push([size - 1, size - 1]);
        return leftDiagWinner;
    };

    var checkRightDiag = function() {
        var rightDiagWinner = [],
            size = $scope.board.length
        ;
        for (var i = 0; i < size - 1; i++) {
            if ($scope.board[i][size - (i + 1)].value == '') {
                return;
            }
            if ($scope.board[i][size - (i + 1)].value != $scope.board[i + 1][size - (i + 2)].value) {
                return;
            }
            rightDiagWinner.push([i, size - (i + 1)]);
        }
        rightDiagWinner.push([size - 1, 0]);
        return rightDiagWinner;
    };

}]);
