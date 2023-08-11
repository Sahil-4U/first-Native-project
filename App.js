import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Co from './components/Co';
import ComTwo from './components/ComTwo';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.customColor}>This is my first app sahil sharma you will rock  </Text>
      <Co />
      <ComTwo name="kapil" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customColor: {
    color: 'black',
    fontSize: 20,
  },
});
