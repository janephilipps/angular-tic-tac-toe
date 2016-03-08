angular.module('HomeCtrl', []).controller('HomeController', ['$scope', function($scope) {

    $scope.boards = 1;

    $scope.addBoard = function() {
        $scope.boards += 1;
    };

    $scope.boardNumberToArray = function() {
        return new Array($scope.boards);
    };

}]);
