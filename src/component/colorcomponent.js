import React , { useState }  from 'react';
import { Text, StyleSheet, View, Button, Image } from "react-native";

const Imagedetails = ({ color, onIncrease, ondecrease }) => {
  const [param, Setparam] = useState(Math.floor(Math.random() * 256));
  return (<View>
        <Text> {color}</Text>
  			<Button title={`More ${color}`} onPress={() => {
  				onIncrease();
  			}} />
    		<Button title={`Less ${color}`} onPress={() => {
  				ondecrease();
  			}} />
        {/*<Text> Current color code: {param}</Text>*/}
  		  </View>);
};

export default Imagedetails;