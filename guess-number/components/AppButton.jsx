import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/color";

const AppButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...styles.button, ...props.buttonStyle }}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 6,
  },

  buttonText: {
    alignItems: "center",
    textAlign: "center",
    color: "white",
    fontFamily: "popins",
    fontSize: 16,
  },
});
export default AppButton;
