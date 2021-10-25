import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import Categories from "../screens/Categories";
import CategoryMeals from "../screens/CategoryMeals";
import Favorites from "../screens/Favorites";
import Filters from "../screens/Filters";
import MealDetails from "../screens/MealDetails";
import Colors from "../constants/Colors";
import { Platform } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.danger : "",
  },
  headerTintColor: Platform.OS === "android" ? "snow" : "",
  headerTitleAlign: "left",
  headerTitleStyle: {
    fontFamily: "poppins-bold",
  },
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: Categories,
    },
    CategoryMeals: { screen: CategoryMeals },
    MealDetail: { screen: MealDetails },
    // Favorites: { screen: Favorites },
  },
  {
    // mode: "card",
    initialRouteName: "Categories",
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: Favorites,
    MealDetails: MealDetails,
  },
  { defaultNavigationOptions: defaultStackNavOptions }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabinfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabinfo.tintColor} />
        );
      },
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabinfo) => {
        return (
          <Ionicons name="ios-heart" size={25} color={tabinfo.tintColor} />
        );
      },
    },
  },
};

const TabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: "white",
        shifting: true,
        barStyle: {
          backgroundColor: Colors.danger,
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.danger,
          // inactiveTintColor: Colors,
          style: {
            fontFamily: "poppins-bold",
            backgroundColor: Colors.background,
          },
        },
      });

const FilterNavigator = createStackNavigator({
  screen: Filters,
});

const MainNavigator = createDrawerNavigator({
  MealsFav: TabNavigator,
  Filters: FilterNavigator,
});

export default createAppContainer(MainNavigator);
