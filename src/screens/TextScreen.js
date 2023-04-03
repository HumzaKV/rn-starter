import React from "react";
import { Text, StyleSheet, View, TextInput} from "react-native";

const textLayout = () => {
  return <View>
  <TextInput style={styles.input}></TextInput>
          </View>;
          };

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  },
});

export default textLayout;