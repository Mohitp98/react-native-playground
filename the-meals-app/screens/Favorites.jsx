import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Favorites = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Favorites Screen Works!</Text>
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

export default Favorites;
