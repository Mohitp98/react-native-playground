import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "../components/Card";
import TitleText from "../components/TitleText";
import AppButton from "../components/AppButton";
import NumberContainer from "../components/NumberContainer";
import color from "../constants/color";
import AppText from "../components/AppText";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.ceil(max);

  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const renderListItem = (value, numOfRound) => (
  <View key={value} style={styles.listItem}>
    <AppText>#{numOfRound}</AppText>
    <AppText>{value}</AppText>
  </View>
);

const GameScreen = (props) => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't Lie!", "You know this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    // setRounds((curRounds) => curRounds + 1);
    setPastGuesses((curPastGuesses) => [nextNumber, ...curPastGuesses]);
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <View style={styles.screen}>
          <TitleText style={styles.heading}>Opponent's Guess</TitleText>
          <Card style={styles.desc}>
            <AppText>
              Your number is smaller or greater?
            </AppText>
            <View style={styles.buttonContainer}>
              <AppButton
                buttonStyle={styles.lowerbutton}
                onPress={nextGuessHandler.bind(this, "lower")}
              >
                <Ionicons name="md-arrow-down" size={24} color="white" />
              </AppButton>

              <NumberContainer>{currentGuess}</NumberContainer>

              <AppButton
                buttonStyle={styles.greaterbutton}
                onPress={nextGuessHandler.bind(this, "greater")}
              >
                <Ionicons name="md-arrow-up" size={24} color="white" />
              </AppButton>
            </View>
          </Card>
          <View style={styles.list}>
            <ScrollView>
              {pastGuesses.map((guess, index) =>
                renderListItem(guess, pastGuesses.length - index)
              )}
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 100,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: Dimensions.get("window").height > 600 ? 10 : 5,
    width: 300,
    maxWidth: "80%",
  },

  lowerbutton: { backgroundColor: color.danger, width: 60, },
  greaterbutton: { backgroundColor: color.success, width: 60 },

  heading: {
    textTransform: "uppercase",
    color: color.heading,
    fontSize: 24,
  },
  desc: {
    textAlign: "center",
    alignItems: "center"
  },

  list: {
    flex: 1,
    width: "80%",
  },

  listItem: {
    elevation: 2,
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    backgroundColor: color.card_back,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default GameScreen;
