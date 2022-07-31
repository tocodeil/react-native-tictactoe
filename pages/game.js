import { StyleSheet, Text, View, Pressable } from 'react-native';
import { play } from '../logic/store';
import { useSelector, useDispatch } from 'react-redux';
import { findWinner } from '../logic/selectors';
import _ from 'lodash';
import { aiplay } from '../logic/aiplay';

function textInPosition(board, row, column) {
  return board[row][column] === 0 ? " "
    : board[row][column] === 1 ? "X"
    : board[row][column] === 2 ? "O"
    : "";
}

export default function Game({ route }) {
  const { players } = route.params;
  const dispatch = useDispatch();
  const board = useSelector(state => state.board);
  const player = useSelector(state => state.currentPlayer);

  const winner = useSelector(findWinner);

  function handleClick(row, column) {
    if (winner === 0) {
      dispatch(play({ player, row, column }));
      if (players === 1) {
        setTimeout(() => {
          dispatch(aiplay());
        }, 200);
      }
    }
  }

  return (
    <View style={gameStyles.container}>
      <Text>
        {winner === 1 ? "Bravo! X Won"
        : winner === 2 ? "Bravo! O Won"
        : winner === 3 ? "Game Over. Tie" : "Playing..."
        }
      </Text>
      {
        _.range(3).map(row => (
          <View key={row} style={gameStyles.row}>
            {
              _.range(3).map(column => (
                <Pressable style={gameStyles.cell} key={column} onPress={() => handleClick(row, column)}>
                  <Text style={gameStyles.cellText}>
                    {textInPosition(board, row, column)}
                  </Text>
                </Pressable>
              ))}
          </View>
        ))}
    </View>
  );
}

const gameStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  cellText: {
    fontSize: 24,
  },
  cell: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f1d2c3',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


