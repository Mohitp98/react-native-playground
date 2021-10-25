import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";
import Colors from "../constants/Colors";

const MealList = (props) => {
  const renderMealItem = (itemData) => {
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
            },
          })
        }
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={props.listdata}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
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
