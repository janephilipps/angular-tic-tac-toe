// Require modules
var angular = require('angular');
require('./css/responsive.css');
require('./css/style.css');
require('./js/controllers/HomeCtrl');
require('./js/controllers/BoardCtrl');

// Instantiate app
var app = angular.module('ticTacToeApp', ['HomeCtrl', 'BoardCtrl']);

// Define directive to display board
app.directive('appBoard', function() {
  return {
    template: require('./views/board.html'),
    controller: 'BoardController'
  };
});
