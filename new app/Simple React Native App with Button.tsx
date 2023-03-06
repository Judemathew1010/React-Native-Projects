import React from 'react';
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  return (
    <View  style={styles.body}>
      <Text style={styles.text}>Programing with Jude</Text>
      <Button title='youtube channel'onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=ANdSdIlgsEw')}}></Button>  
    </View>
  );
};

const styles = StyleSheet.create({
  body:{
    flex: 1,
    backgroundColor: "#0044ff",
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  }
});

export default App;
