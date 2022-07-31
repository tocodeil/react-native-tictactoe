import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  currentPlayer: 1,
  board: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
};

const slice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    restart() {
      return initialState;
    },
    play(state, action) {
      const { player, row, column } = action.payload;
      if (state.board[row][column] !== 0) {
        // square already taken
        return;
      }

      // mark move
      state.board[row][column] = player;

      // switch player
      if (state.currentPlayer === 1) {
        state.currentPlayer = 2;
      } else {
        state.currentPlayer = 1;
      }
    },
  },
});

export const { restart, play } = slice.actions;
export default configureStore(slice);
