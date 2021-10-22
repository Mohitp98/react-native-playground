import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";
import AppText from "./AppText";

const CategoryGridTile = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp onPress={props.onSelect} style={{ flex: 1 }}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <AppText numberOfLines={2} style={styles.title}>
            {props.title}
          </AppText>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: "hidden"
  },

  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    borderRadius: 10,
    elevation: 3,
    padding: 15,
  },

  title: {
    fontSize: 20,
    fontFamily: "poppins-bold",
    textAlign: "right",
    color: Colors.black,
  },
});

export default CategoryGridTile;
