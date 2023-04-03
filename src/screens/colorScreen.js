import React , { useState }  from 'react';
import { Text, StyleSheet, View, Button, Image, FlatList} from "react-native";

const ColorScreen = () => {
const [color, Setcolor] = useState([]);
console.log(color);
  return (<View>
  			<Button title="Change Color" onPress={() => { Setcolor( [...color , randrgb()] ) }} />
         <FlatList 
         keyExtractor={ item => item }
         data={color} 
         renderItem={({item}) => {
            return (
                <View style={{height: 100, width:100, backgroundColor: item }} />
              )
         }}  
         />
  		  </View>);
};

const randrgb = () =>{
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 255);

  return `rgb( ${red}, ${green}, ${blue} )`;
};


const styles = StyleSheet.create({});


export default ColorScreen;