import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white' }}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
