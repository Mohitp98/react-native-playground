import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";

import AppText from "../components/AppText";
import Colors from "../constants/Colors";

const MealItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onSelectMeal}>
      <View
        style={{ ...styles.mealItem, backgroundColor: props.categoryColor }}
      >
        <View style={{ ...styles.mealRow, ...styles.mealHeaderContainer }}>
          <ImageBackground
            style={styles.bgimage}
            source={{ uri: props.metadata.imageUrl }}
          >
            <View style={styles.titleContainer}>
              <AppText numberOfLines={1} style={styles.mealHeader}>
                {props.title}
              </AppText>
            </View>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <AppText style={styles.desc}>{props.metadata.duration}M</AppText>
          <AppText style={styles.desc}>
            {props.metadata.complexity.toUpperCase()}
          </AppText>
          <AppText style={styles.desc}>
            {props.metadata.affordability.toUpperCase()}
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.platinum,
    borderRadius: 16,
    shadowRadius: 10,
    shadowColor: "black",
    // shadowOpacity: 0.26,
    shadowOffset: { width: 10, height: 12 },
    marginBottom: 16,
    overflow: "hidden",
  },
  bgimage: { width: "100%", height: "100%", justifyContent: "flex-end" },
  mealRow: { flexDirection: "row" },
  mealHeaderContainer: {
    height: "85%",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  mealHeader: {
    fontFamily: "poppins-bold",
    fontSize: 20,
    color: "snow",
    textAlign: "center",
    fontWeight: "100",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "snow",
    height: "13.5%",
  },

  desc: {
    color: Colors.black,
    fontFamily: "poppins-semibold"
  },
});

export default MealItem;
