import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import componentScreen from "./src/screens/componentScreen";
import listScreen from "./src/screens/listScreen";
import imageLayout from "./src/screens/ImageScreen";
import counterLayout from "./src/screens/counterscreen";
import colorScreen from "./src/screens/colorScreen";
import singlecolor from "./src/screens/singlecolor";
import textLayout from "./src/screens/TextScreen";

const navigator = createStackNavigator(
  {
    Image: imageLayout,
    List: listScreen,
    Home: HomeScreen,
    components: componentScreen,
    counter: counterLayout,
    color: colorScreen,
    scolor: singlecolor,
    txtlayout: textLayout,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
