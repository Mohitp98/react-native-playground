import React from "react";
import { StyleSheet, Text } from "react-native";
import color from "../constants/color";

const AppText = (props) => (
  <Text style={{...styles.body, ...props.style}}>{props.children}</Text>
);

const styles = StyleSheet.create({
  body: {
    fontFamily: "popins",
    fontSize: 18,
    color: color.sec_text_color
  },
});

export default AppText;
