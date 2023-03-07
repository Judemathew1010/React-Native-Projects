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
  
  const[name,setname] =useState('Add 5')
  const[session, setSession] = useState({ number: 1, title: 'state1'})
  const[current, setCurrent] = useState(true)

  const onClickHandler = () =>  {
    counter += 5;
    click += 1;
    setname('ya Add 5 again')
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
    width:"100%",
    height:"50%",
    backgroundColor: "#0044ff",
    alignItems:'center',
    justifyContent:'center',
    borderWidth:10,
    borderColor:"#fcfc87",
    borderRadius:20,
    marginBottom:600,
  },
  text:{
    color: "#fcfc87",
    fontSize: 30,
    fontStyle: 'normal',
    textTransform:'uppercase',
    margin: 10,
  }
 
});

export default App;
