import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Categories from "../screens/Categories";
import CategoryMeals from "../screens/CategoryMeals";
import MealDetails from "../screens/MealDetails";
import Colors from "../constants/Colors";
import { Platform } from "react-native";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: Categories,
    },
    CategoryMeals: { screen: CategoryMeals },
    MealDetail: { screen: MealDetails },
  },
  {
    // initialRouteName: "Categories",
    defaultNavigationOptions: {
      headerStyle: {
        // fontFamily: "poppins-bold",
        backgroundColor: Platform.OS === "android" ? Colors.danger : "",
      },
      headerTintColor: Platform.OS === "android" ? "snow" : "",
    },
  }
);

export default createAppContainer(MealsNavigator);
