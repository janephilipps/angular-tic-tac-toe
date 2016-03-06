var angular = require('angular');
require('./css/responsive.css');
require('./css/style.css');
require('./js/controllers/HomeCtrl');
require('./js/controllers/BoardCtrl');

var app = angular.module('ticTacToeApp', ['HomeCtrl', 'BoardCtrl']);

app.directive('appBoard', function() {
  return {
    template: require('./views/board.html'),
    controller: 'BoardController'
  };
});
