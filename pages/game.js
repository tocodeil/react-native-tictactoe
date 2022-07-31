import { StyleSheet, Text, View, Pressable } from 'react-native';
import _ from 'lodash';

export default function Game({ route }) {
  const { players } = route.params;
  function play(row, column) {
    alert(`Play: ${row}, ${column}`);
  }

  return (
    <View style={gameStyles.container}>
      <Text>It's a {players} players game</Text>
      {
        _.range(3).map(row => (
          <View key={row} style={gameStyles.row}>
            {
              _.range(3).map(column => (
                <Pressable style={gameStyles.cell} key={column} onPress={() => play(row, column)}>
                  <Text style={gameStyles.cellText}> </Text>
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
  },
});


