/**
 * Check if a board has a winner
 * Returns:
 *      3 => there's a tie
 *      2 => player 2 wins
 *      1 => player 1 wins
 *      0 => no winner, can continue game
 */
export function findWinner(state) {
  const winningCoords = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],

    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],

    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]],
  ];

  for (const player of [1, 2]) {
    if (winningCoords.some(c => isEqual(state.board, player, c))) {
      return player;
    }
  }

  const emptySquares = state.board.flatMap(x => x).filter(x => x === 0);
  if (emptySquares.length === 0) {
    // no winner and nowhere to play - tie
    return 3;
  }

  return 0;
}

function isEqual(board, player, coords) {
  return coords.every(([row, column]) => (
    board[row][column] === player
  ));
}

