angular.module('HomeCtrl', []).controller('HomeController', ['$scope', function($scope) {

    $scope.boards = 1;

    $scope.getBoardNumber = function(boards) {
        return new Array(boards);
    }

    $scope.addBoard = function() {
        $scope.boards += 1;
    };
}]);