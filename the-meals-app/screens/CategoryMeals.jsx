import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import MealList from "../components/MealList";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMeals = (props) => {
  const catColor = props.navigation.getParam("categoryColor");
  const catID = props.navigation.getParam("categoryID");
  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catID) >= 0
  );

  return (
    <MealList
      listdata={displayMeals}
      navigation={props.navigation}
      catColor={catColor}
    />
  );
};

CategoryMeals.navigationOptions = (navigationData) => {
  const catID = navigationData.navigation.getParam("categoryID");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catID);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({});

export default CategoryMeals;
