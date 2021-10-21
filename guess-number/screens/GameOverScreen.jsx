import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppButton from "../components/AppButton";
import color from "../constants/color";
import TextTitle from "../components/TitleText";
import AppText from "../components/AppText";
import TitleText from "../components/TitleText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require("../assets/img/success.png")}
        />
      </View>
      
      <TextTitle style={styles.heading}>COMPUTER WON <MaterialCommunityIcons name="trophy-variant" size={28} color={color.accent} /></TextTitle>
      <AppText style={styles.textContainer}>
        The Number was:
        <TitleText style={styles.numberContainer}>
          {" "}
          {props.userNumber}
        </TitleText>
      </AppText>
      <AppText style={styles.textContainer}>
        Number of rounds:
        <TitleText style={styles.numberContainer}>
          {" "}
          {props.roundNumbers}
        </TitleText>
      </AppText>

      <View style={styles.restartButton}>
        <AppButton buttonStyle={styles.button} onPress={props.onRestart}>PLAY AGAIN</AppButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  heading: {
    fontSize: 28,
    color: color.accent,
    textShadowRadius: 5,
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
  },

  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "45%",
  },

  textContainer: {
    fontSize: 16,
    color: color.accent,
  },

  numberContainer: {
    fontSize: 16,
    color: color.primary,
  },

  restartButton: {
    padding: 16,
    width: 170,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 300,
    height: 300,
    position: "absolute",
    opacity: 0.7,
    borderRadius: 150,
    borderWidth: 8,
    borderColor: color.accent,
  },

  button:{
    backgroundColor: color.primary
  },
});

export default GameOverScreen;
