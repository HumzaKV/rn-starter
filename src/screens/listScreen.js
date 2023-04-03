import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
const KvEmp = [
		{name: 'Sheryar', age: 23},
		{name: 'Emad', age: 21},
		{name: 'Areeb', age: 27},
		{name: 'Taihmoor', age: 24},
		{name: 'Abdullah', age: 29},
		{name: 'Sheryar', age: 25},
		{name: 'Yasir', age: 20},	
		{name: 'Uzair', age: 22},
	  ]
const listScreen = () => {
  return <FlatList horizontal data={KvEmp} renderItem={({item}) => {
		return <Text style={ styles.vertical_space }>Name: {item.age}--Age: {item.age}</Text>;
  }}>
        	Getting started with List screen!
  		 </FlatList>
};

const styles = StyleSheet.create({
  vertical_space: {
    marginRight: 60,
  },
});

export default listScreen;
