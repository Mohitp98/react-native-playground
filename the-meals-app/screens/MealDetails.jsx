import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import AppText from "../components/AppText";
import CustomHeaderButton from "../components/HeaderButton";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";

const MealDetails = (props) => {
  const mealID = props.navigation.getParam("mealID");
  const mealDetails = MEALS.find((meal) => meal.id === mealID);

  // console.log("[DEBUG] ", mealID);
  return (
    <View style={styles.screen}>
      <Text>MealDetails Screen Works!</Text>
      <Text>{mealDetails.title}</Text>
      {/* <Text>{mealDetails.steps}</Text> */}
    </View>
  );
};

MealDetails.navigationOptions = (navigationData) => {
  const mealID = navigationData.navigation.getParam("mealID");
  const mealDetails = MEALS.find((meal) => meal.id === mealID);
  return {
    headerTitle: mealDetails.title,
    headerRight: () => {
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("Pressed");
          }}
        />
      </HeaderButtons>;
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetails;
