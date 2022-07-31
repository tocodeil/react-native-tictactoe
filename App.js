import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import _ from 'lodash';

export default function Game() {
  function play(row, column) {
    alert(`Play: ${row}, ${column}`);
  }

  return (
    <View style={gameStyles.container}>
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


function MainMenu() {
  function play(players) {
    alert(`Play: ${players}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome To my Tic Tac Toe Game</Text>
      </View>
      <View style={styles.main}>
        <Pressable onPress={() => play(1)} style={styles.button}>
          <Text style={styles.buttonText}>1 Player</Text>
        </Pressable>
        <Pressable onPress={() => play(2)} style={styles.button}>
          <Text style={styles.buttonText}>2 Players</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


function App() {
  return (
    <View style={styles.container}>
      <Text>I'm in the iOS Simulator</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 20,
  },
  headerText: {
    fontSize: 36,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#c9c9c9',
    margin: 5,
    width: 150,
    padding: 10,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});


