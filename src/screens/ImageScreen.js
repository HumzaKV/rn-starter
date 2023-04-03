import React from "react";
import { Text, StyleSheet, View, Button} from "react-native";
import Imagedetails from "../component/imagecomponent";

const imageLayout = () => {
  return <View>
            <Imagedetails title="Forest" imgsrc={require('../../assets/forest.jpg')} score={9} />
            <Imagedetails title="Mountain" imgsrc={require('../../assets/mountain.jpg')} score={3} />
            <Imagedetails title="Home" imgsrc={require('../../assets/beach.jpg')} score={7} />
          </View>;
          };

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default imageLayout;