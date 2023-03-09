import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

interface BlockProps {
  backgroundColor: string;
  children: React.ReactNode;
}

function Block({ backgroundColor, children }: BlockProps) {
  return (
    <View style={[styles.block, { backgroundColor }]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Block backgroundColor="#00ffff">1</Block>
        <Block backgroundColor="#ff00ff">2</Block>
      </View>
      <View style={styles.row}>
        <Block backgroundColor="#ffff00">3</Block>
        <Block backgroundColor="#ffff00">4</Block>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 7,
    height: 100,
  },
  text: {
    color: '#000000',
    fontSize: 35,
    fontStyle: 'italic',
  },
});
