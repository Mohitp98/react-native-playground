import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealDetails = (props) => {
  return (
    <View style={styles.screen}>
      <Text>MealDetails Screen Works!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetails;
