import React from "react";
import { StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMeals = (props) => {
  const catColor = props.navigation.getParam("categoryColor");
  const catID = props.navigation.getParam("categoryID");
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayMeals = availableMeals.filter(
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
