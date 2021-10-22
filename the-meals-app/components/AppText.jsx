import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";

const AppText = (props) => {
  return (
    <Text numberOfLines={props.numberOfLines} style={{ ...styles.body, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  body: {
    fontFamily: "poppins",
    fontSize: 14,
    color: Colors.black,
  },
});

export default AppText;
