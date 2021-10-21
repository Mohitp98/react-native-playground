import React from "react";
import { StyleSheet, TextInput } from "react-native";
import color from "../constants/color";

const Input = (props) => {
  return (
    <TextInput
      {...props}
      style={{ ...styles.input, ...props.style }}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: color.sec_text_color,
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
