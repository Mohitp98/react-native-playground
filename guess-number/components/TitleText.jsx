import React from "react";
import { StyleSheet, Text } from "react-native";

const TitleText = (props) => (
  <Text style={{...styles.body, ...props.style}}>{props.children}</Text>
);

const styles = StyleSheet.create({
  body: {
    fontFamily: "popins-bold",
    fontSize: 22,
  },
});

export default TitleText;
