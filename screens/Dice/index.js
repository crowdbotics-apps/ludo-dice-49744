import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, Button, Image, StyleSheet } from "react-native";

const DiceGameScreen = () => {
  const [chosenNumber, setChosenNumber] = useState("");
  const [diceNumber, setDiceNumber] = useState(null);
  const [points, setPoints] = useState(0);

  const rollDice = () => {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randomNum);

    if (parseInt(chosenNumber) === randomNum) {
      setPoints(points + 1);
    }
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Dice Game</Text>
      <Text style={styles.label}>Choose a number (1-6):</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={chosenNumber} onChangeText={setChosenNumber} />
      <Button title="Roll Dice" onPress={rollDice} />
      {diceNumber !== null && <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Dice Rolled: {diceNumber}</Text>
          <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.diceImage} />
        </View>}
      <Text style={styles.points}>Points: {points}</Text>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5"
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20
  },
  label: {
    fontSize: 18,
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  resultContainer: {
    alignItems: "center",
    marginVertical: 20
  },
  resultText: {
    fontSize: 24,
    marginBottom: 10
  },
  diceImage: {
    width: 100,
    height: 100
  },
  points: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 20
  }
});
export default DiceGameScreen;