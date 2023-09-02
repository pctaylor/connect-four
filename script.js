//create board
const getBoard = (() => {
    let board = [...Array(6)].map(e => Array(6).fill(null));
    return {
        board: board
    };
})();

//means to create players
const playerFactory = (name, symbol) => {
    const move = (row, column) => {
        if (getBoard.board[row][column] === null) {
            getBoard.board[row][column] = symbol;
        }
    }
    return {
        name,
        symbol,
        move
    };
};
/*
const player1 = playerFactory("player1", "X")
player1.move(2,2);
console.log(getBoard.board);
*/

// playing rounds
const gameRounds = (() => {

    //set up players
    const p1name = prompt('Player 1: enter your name');
    const p1symbol = prompt('Player 1: enter your symbol');
    const player1 = playerFactory(p1name, p1symbol);
    const p2name = prompt('Player 2: enter your name');
    const p2symbol = prompt('Player 2: enter your symbol');
    const player2 = playerFactory(p2name, p2symbol);

    //start game
    console.log("Game begins");

    //rounds
    for (let i=0; i<6; i++) {
        const p1move = prompt(`${p1name}, enter row and column, separated by a space`);
        let [row, column] = p1move.split(' ');
        player1.move(row, column);
        console.log(getBoard.board)
        const p2move = prompt(`${p2name}, enter row and column, separated by a space`);
        [row, column] = p2move.split(' ');
        player2.move(row, column);
        console.log(getBoard.board)
    }
    
})();

