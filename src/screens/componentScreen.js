import React from "react";
import { Text, StyleSheet, View } from "react-native";

const name = 'Hamza';
const componentScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>
        Getting started with React Native!
      </Text>
      <Text style={styles.paraStyle}>
        My Name is {name} !
      </Text>
    </View>
    );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  paraStyle: {
    fontSize: 20,
  },
});

export default componentScreen;
