describe('ticTacToeApp ', function() {

    var scope,
        controller
    ;
    beforeEach(function() {
        module('ticTacToeApp');
    });

    describe('BoardController', function() {
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('BoardController', {
                '$scope': scope
            });
        }));

        it('has no turns', function() {
            expect(scope.turns).toEqual(0);
        });
    });
});