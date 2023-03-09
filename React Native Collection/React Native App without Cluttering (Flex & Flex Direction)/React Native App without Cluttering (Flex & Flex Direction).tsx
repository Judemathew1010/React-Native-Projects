import React from 'react';
import {
  
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  

  return (
    <View  style={styles.body}>
      <View style={styles.View1}>
        <Text style ={styles.text}>1</Text>
      </View>
      <View style={styles.View2}>
        <Text style ={styles.text}>2</Text>
      </View>
      <View style={styles.View3}>
        <Text style ={styles.text}>3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body:{
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#0fff",
    alignItems:'stretch',
    justifyContent:'center',
    
  },
  View1:{
     flex:1,
     backgroundColor: "#ffffff",
     alignItems:'center',
    justifyContent:'center',
    },
  View2:{
    flex:1,    
    backgroundColor: "#412eec",
    alignItems:'center',
    justifyContent:'center',
    },  
  View3:{
    flex:1,
    backgroundColor: "#ebff0d",
    alignItems:'center',
    justifyContent:'center',
    },
  text:{
    color: "#000f",
    fontSize: 30,
    fontStyle: 'normal',
    textTransform:'uppercase',
    
  }
 
});

export default App;
