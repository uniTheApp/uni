import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-rn';

export default function App() {
  return (
    <View style={tw("flex-1 justify-center items-center")}>
      <Text>Test!</Text>
      <Button title="click me!"></Button>
    </View>

  );
}

