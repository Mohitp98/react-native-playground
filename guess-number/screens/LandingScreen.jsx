import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import Card from "../components/Card";
import Colors from "../constants/color";
import Input from "../components/Input";
import TitleText from "../components/TitleText";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import NumberContainer from "../components/NumberContainer";
import color from "../constants/color";

const Landing = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get("window").width / 4
  );

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  // ensures that it is rerender
  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get("window").width / 4);
    };

    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Ok", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOP;
  if (confirmed) {
    confirmedOP = (
      <Card style={styles.summaryContainer}>
        <AppText>You Selected</AppText>
        <NumberContainer children={selectedNumber}></NumberContainer>
        <AppButton onPress={() => props.onStartGame(selectedNumber)}>
          START GAME
        </AppButton>
      </Card>
    );
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.screen}>
            <TitleText style={styles.title}>Start a New Game!</TitleText>
            <Card style={styles.inputContainer}>
              <AppText>Select a Number</AppText>
              <Input
                style={styles.input}
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={2}
                onChangeText={numberInputHandler}
                value={enteredValue}
              />
              <View style={styles.buttonContainer}>
                <View style={{ width: buttonWidth }}>
                  <AppButton
                    buttonStyle={styles.button}
                    onPress={resetInputHandler}
                  >
                    RESET
                  </AppButton>
                </View>
                <View style={{ width: buttonWidth }}>
                  <AppButton onPress={confirmInputHandler}>CONFIRM</AppButton>
                </View>
              </View>
            </Card>
            {confirmedOP}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    marginVertical: 50,
    fontFamily: "popins-bold",
    color: color.primary,
    textShadowRadius: 6,
    textShadowColor: color.danger,
    textShadowOffset: { width: 2, height: 2 },
    textTransform: "uppercase",
  },

  inputContainer: {
    width: "80%",
    maxWidth: "95%",
    minWidth: 300,
    alignItems: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    paddingTop: 16,
    paddingHorizontal: 1,
  },

  button: {
    backgroundColor: color.accent,
  },

  // handling dynamic styling
  // buttonStyle: {
  //   // width: 110,
  //   width: Dimensions.get("window").width / 4,
  // },

  input: {
    width: 50,
    textAlign: "center",
    color: color.sec_text_color,
  },

  summaryContainer: {
    marginTop: 20,
    backgroundColor: color.card_back,
    alignItems: "center",
  },
});

export default Landing;
