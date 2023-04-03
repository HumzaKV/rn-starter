import React from 'react';
import { Text, StyleSheet, View, Button, Image } from "react-native";

const Imagedetails = (props) => {
  console.log(props);
  return (<View>
  			<Image source={props.imgsrc} />
  			<Text> {props.title} </Text>
  			<Text> {props.score} </Text>
  		  </View>);
};

export default Imagedetails;