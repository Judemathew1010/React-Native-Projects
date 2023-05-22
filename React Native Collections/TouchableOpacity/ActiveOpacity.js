import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        height: 400,
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <TouchableOpacity
        style={{
          height: 50,
          width: '60%',
          backgroundColor: 'skyblue',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
        }}
        activeOpacity={0.9} // Set the desired touchable opacity (e.g., 0.8)
      >
        <Text>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
}
