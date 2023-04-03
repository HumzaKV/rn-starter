import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button, Image } from 'react-native';
import Colordetails from '../component/colorcomponent';
const randnum = 15;
const reducer =(state, action) => {
// state ===   {red: randint, green: randint, blue: randint}
// action === {type = change_red || change_green || change_blue, payload = 15 ||-15}
  switch(action.colorToChange){
    case'red':
     return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : {...state, red: state.red + action.payload};
    case'green':
     return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : {...state, green: state.blue + action.payload};
    case'blue':
     return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : {...state, blue: state.blue + action.payload};
    default:
      return state;
  }
};

const Singlecolor = () => {
  const [state, dispatch] = useReducer(reducer, {red: Math.floor(Math.random() * 256), 
    green: Math.floor(Math.random() * 256), blue: Math.floor(Math.random() * 256)});
  const {red, green, blue} = state;
  const rgbcode = `rgb( ${red}, ${green}, ${blue} )`;
  return (
    <View>
      <Colordetails
        onIncrease={() => dispatch({ type: 'change_red', payload: randnum })}
        ondecrease={() => dispatch({ type: 'change_red', payload: -1 * randnum })}
        color="Red"
      />
      <Colordetails
        onIncrease={() => dispatch({ type: 'change_green', payload: randnum })}
        ondecrease={() => dispatch({ type: 'change_green', payload: -1 * randnum })}
        color="Green"
      />
      <Colordetails
        onIncrease={() => dispatch({ type: 'change_blue',payload: randnum })}
        ondecrease={() => dispatch({ type: 'change_blue',payload: -1 * randnum })}
        color="Blue"
      />
      <Text>{rgbcode}</Text>
      <View style={{ height: 100, width: 100, backgroundColor: rgbcode }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Singlecolor;
