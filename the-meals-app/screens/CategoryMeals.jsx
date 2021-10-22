import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMeals = (props) => {
  const catID = props.navigation.getParam("categoryID");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catID);
  return (
    <View style={styles.screen}>
      <Text>CategoryMeals Screen Works!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Take me to Meal Details"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      />
    </View>
  );
};

CategoryMeals.navigationOptions = (navigationData) => {
  const catID = navigationData.navigation.getParam("categoryID");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catID);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMeals;
