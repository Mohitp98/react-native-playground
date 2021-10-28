import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import MealItem from "./MealItem";
import Colors from "../constants/Colors";
import AppText from "./AppText";

const MealList = (props) => {
  const currentFavMeals = useSelector((state) => state.meals.favoriteMeals);

  const renderMealItem = (itemData) => {
    const isFavorite = currentFavMeals.some(
      (meal) => meal.id === itemData.item.id
    );
    return (
      <MealItem
        title={itemData.item.title}
        metadata={itemData.item}
        categoryColor={props.catColor ? props.catColor : Colors.danger}
        onSelectMeal={() =>
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealID: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav: isFavorite,
            },
          })
        }
      />
    );
  };
  return (
    <View style={styles.list}>
      {props.listdata.length != 0 ? (
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={props.listdata}
          renderItem={renderMealItem}
          style={{ width: "100%" }}
        />
      ) : (
        <AppText>No Record Found</AppText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default MealList;
