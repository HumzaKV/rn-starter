import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (<View>
            <Text style={styles.text}>
              HomeScreen
            </Text>

            <Button 
            title="Image"
            onPress={() => props.navigation.navigate('Image')}/>

            <Button 
            title="Counter"
            onPress={() => props.navigation.navigate('counter')}/>

            <Button
            title="Color Change"
            onPress={() => props.navigation.navigate('color')}/> 

            <Button 
            title="Color Set"
            onPress={() => props.navigation.navigate('scolor')}/> 
            <Button 
            title="Text Change"
            onPress={() => props.navigation.navigate('txtlayout')}/> 

          </View>);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
