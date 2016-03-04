var app = angular.module('ticTacToeApp', []);

app.controller('BoardCtrl', ['$scope', function($scope) {

    $scope.test = 'hello';

}]);

app.directive('appBoard', function() {
  return {
    templateUrl: '/views/board.html'
  };
});