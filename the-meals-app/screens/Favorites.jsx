import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const Favorites = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  // console.log("[DEBUG]", favMeals);
  return <MealList listdata={favMeals} navigation={props.navigation} />;
};

Favorites.navigationOptions = {
  headerTitle: "Your Favorites",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Favorites;
