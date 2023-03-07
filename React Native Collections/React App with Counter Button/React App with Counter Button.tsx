import React, {useState} from 'react';
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';

let counter = 0;
let click =0;
const App = () => {
  
  const[name,setname] =useState('Jude')
  const[session, setSession] = useState({ number: 1, title: 'state1'})
  const[current, setCurrent] = useState(true)

  const onClickHandler = () =>  {
    counter += 5;
    click += 1;
    setname('Adding 5 for every clicks')
    setSession({ number: 2, title: 'state2'})
    setCurrent(false) 

  }
  return (
    <View  style={styles.body}>
      <Text style ={styles.text}>{current?counter=0:counter}</Text>
      <Button title='Add'onPress={onClickHandler}></Button> 
      <Text style ={styles.text}>{current?click=0:click}</Text>
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
