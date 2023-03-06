import React, {useState} from 'react';
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';


const App = () => {
  const[name,setname] =useState('Jude')
  const[session, setSession] = useState({ number: 6, title: 'state'})

  const onClickHandler = () =>  {
    setname('Programming with Jude')
    setSession({ number: 7, title: 'Style'})

  }
  return (
    <View  style={styles.body}>
      <Text style={styles.text}>This is session number {session.number} and about{session.title}</Text>
      <Button title='youtube channel'onPress={onClickHandler}></Button>  
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

