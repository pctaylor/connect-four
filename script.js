//create board

const getBoard = (() => {
    let board = [...Array(6)].map(e => Array(6));
    return {
        board: board
    };
})();

const playerFactory = (name, symbol) => {
    return {
        name,
        symbol
    };
};
const player1 = playerFactory('player1', 'X');
console.log(player1.name + " : " + player1.symbol);

/*
//change an element of the board
getBoard.board[2][3] = "O";
getBoard.board;
*/