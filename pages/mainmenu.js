import { StatusBar } from 'expo-status-bar';
import { useDispatch } from 'react-redux';
import { restart } from '../logic/store';
import { StyleSheet, Text, View, Pressable, Platform } from 'react-native';

export default function MainMenu({ navigation }) {
  const dispatch = useDispatch();

  function play(players) {
    dispatch(restart());
    navigation.navigate('Game', { players });
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

const styles = StyleSheet.create({
  header: {
    height: Platform.OS === 'web' ? 20 : 40,
  },
  headerText: {
    fontSize: Platform.OS === 'web' ? 36 : 24,
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


