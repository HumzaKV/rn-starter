import React , { useReducer }  from 'react';
import { Text, StyleSheet, View, Button, Image} from "react-native";
const setcounter =(state, action) => {
// state ===   {red: randint, green: randint, blue: randint}
// action === {type = change_red || change_green || change_blue, payload = 15 ||-15}
  switch(action.type){
    case'increment':
     return {...state, count: state.count + action.payload};
    case'decrement':
     return {...state, count: state.count - action.payload};
    default:
     return state;
  }
};
const counterScreen = () => {
const [state, dispatch] = useReducer(reducer, { count: 0});
  return (<View>
  			<Button title="Increase" onPress={() => {
  				dispatch({ type: 'increment', payload: 1 });
  			}} />
    		<Button style={{width:100}} title="Decrease" onPress={() => {
  				dispatch({ type: 'decrement', payload: 1 });
  			}} />
  			<Text> Current Count: {state.count}</Text>
  		  </View>);
};

const styles = StyleSheet.create({});


export default counterScreen;