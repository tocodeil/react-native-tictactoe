import { createAsyncThunk } from '@reduxjs/toolkit';
import { play } from './store';
import { findWinner } from './selectors';

export const aiplay = createAsyncThunk('game/aiplay', (_, { getState, dispatch }) => {
  const board = getState().board;
  const player = 2;

  if (findWinner(getState()) !== 0) {
    return;
  }

  for (let row=0; row < 3; row++) {
    for (let column=0; column < 3; column++) {
      if (board[row][column] === 0) {
        return dispatch(play({ player, row, column }));
      }
    }
  }
});
