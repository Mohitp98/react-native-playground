import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Color from "../constants/color";
import TitleText from "./TitleText";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <TitleText style={styles.number}>{props.children}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Color.accent,
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  number: {
      color: Color.accent,
      fontSize: 22
  }
});

export default NumberContainer;
