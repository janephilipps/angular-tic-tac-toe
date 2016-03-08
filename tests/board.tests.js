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

        it('has a board', function() {
            expect(scope.board).toEqual({
                size: 3,
                board: [
                        [{ value: '', winner: ''}, { value: '', winner: ''}, { value: '', winner: ''}],
                        [{ value: '', winner: ''}, { value: '', winner: ''}, { value: '', winner: ''}],
                        [{ value: '', winner: ''}, { value: '', winner: ''}, { value: '', winner: ''}]
                        ]
            });
        });

        it('plays a move', function() {
            scope.playerMove(1,1);
            expect(scope.turns).toEqual(1);
        });

        it('plays a move to same square only once', function() {
            scope.playerMove(1,1);
            scope.playerMove(1,1);
            expect(scope.turns).toEqual(1);
        });

        it('alternates between X and O', function() {
            scope.playerMove(0,2);
            scope.playerMove(0,1);
            expect(scope.board).toEqual({
                size: 3,
                board: [
                        [{ value: '', winner: ''}, { value: 'O', winner: ''}, { value: 'X', winner: ''}],
                        [{ value: '', winner: ''}, { value: '', winner: ''}, { value: '', winner: ''}],
                        [{ value: '', winner: ''}, { value: '', winner: ''}, { value: '', winner: ''}]
                        ]
            });
        });

        it('finds a winner on a row', function() {
            scope.playerMove(0,0);
            scope.playerMove(1,0);
            scope.playerMove(0,1);
            scope.playerMove(1,1);
            scope.playerMove(0,2);
            expect(scope.winner).toEqual('X');
        });

        it('finds a winner on a column', function() {
            scope.playerMove(0,0);
            scope.playerMove(0,1);
            scope.playerMove(1,0);
            scope.playerMove(0,2);
            scope.playerMove(2,0);
            expect(scope.winner).toEqual('X');
        });

        it('finds a winner on left diagonal', function() {
            scope.playerMove(0,0);
            scope.playerMove(0,1);
            scope.playerMove(1,1);
            scope.playerMove(0,2);
            scope.playerMove(2,2);
            expect(scope.winner).toEqual('X');
        });

        it('finds a winner on right diagonal', function() {
            scope.playerMove(0,0);
            scope.playerMove(0,2);
            scope.playerMove(1,0);
            scope.playerMove(1,1);
            scope.playerMove(2,2);
            scope.playerMove(2,0);
            expect(scope.winner).toEqual('O');
        });

        it('finds a draw', function() {
            scope.playerMove(0,1);
            scope.playerMove(0,0);
            scope.playerMove(0,2);
            scope.playerMove(1,2);
            scope.playerMove(1,0);
            scope.playerMove(2,0);
            scope.playerMove(1,1);
            scope.playerMove(2,1);
            scope.playerMove(2,2);
            expect(scope.gameMessage).toEqual('It\'s a draw!');
        });

        it('changes size', function() {
            scope.board.size = 4;
            scope.resetBoard();
            expect(scope.board.board).toEqual([
                        [{ value: '', winner: ''}, { value: '', winner: ''}, { value: '', winner: ''}, { value: '', winner: ''}],
                        [{ value: '', winner: ''}, { value: '', winner: ''}, { value: '', winner: ''}, { value: '', winner: ''}],
                        [{ value: '', winner: ''}, { value: '', winner: ''}, { value: '', winner: ''}, { value: '', winner: ''}],
                        [{ value: '', winner: ''}, { value: '', winner: ''}, { value: '', winner: ''}, { value: '', winner: ''}]
                        ]);
        });

    });
});
