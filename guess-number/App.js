import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Landing from "./screens/LandingScreen";
import color from "./constants/color";

const fetchFonts = () => {
  return Font.loadAsync({
    "popins": require("./assets/fonts/Poppins-Regular.ttf"),
    "popins-bold": require("./assets/fonts/Poppins-Black.ttf"),
  });
};

export default function App() {
  const [userNumber, setuserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => {
          Alert.alert("Something Went Wrong", err, [
            { text: "Ok", style: "cancel" },
          ])
        }}
      />
    );
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setuserNumber(null);
  };

  const gameOverHandler = (numofRecords) => {
    setGuessRounds(numofRecords);
  };

  const startGameHandler = (selectedNumber) => {
    setuserNumber(selectedNumber);
    setGuessRounds(0);
  };

  return (
    <View style={styles.screen}>
      <Header title="Guess The Number" />
      {userNumber && guessRounds <= 0 ? (
        <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
      ) : guessRounds > 0 ? (
        <GameOverScreen
          roundNumbers={guessRounds}
          userNumber={userNumber}
          onRestart={configureNewGameHandler}
        />
      ) : (
        <Landing onStartGame={startGameHandler} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: color.background
  },
});
