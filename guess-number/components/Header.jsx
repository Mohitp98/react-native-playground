import React from "react";
import { View, Text, StyleSheet } from "react-native";
import color from "../constants/color";
import Colors from "../constants/color";
import AppTitleText from "./TitleText";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <AppTitleText style={styles.appTitle}>{props.title}</AppTitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 110,
    paddingTop: 70,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  appTitle: {
    fontWeight:"800",
    fontSize: 26,
    textShadowRadius: 8,
    textShadowColor: color.heading,
    textShadowOffset: { width: 2, height: 2 },
    color: "snow",
    textTransform: "uppercase",
  },
});

export default Header;
