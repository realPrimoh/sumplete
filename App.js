import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [targetNumber, setTargetNumber] = useState("");
  const [resultMessage, setResultMessage] = useState("");

  function handleNumberPress(number) {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
    } else {
      setSelectedNumbers([...selectedNumbers, number]);
    }
  }

  function calculateSum() {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (!selectedNumbers.includes(numbers[i])) {
        sum += numbers[i];
      }
    }
    if (sum == targetNumber) {
      setResultMessage("Congratulations, you've won!");
    } else {
      setResultMessage("Sorry, the sum of the remaining numbers does not match the target.");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sum Delete</Text>
      <Text style={styles.instructions}>Instructions: Delete some numbers to make the remaining numbers sum to the target number.</Text>
      <View style={styles.numberTable}>
        <View style={styles.row}>
          <TouchableOpacity style={selectedNumbers.includes(1) ? styles.selectedNumberButton : styles.numberButton} onPress={() => handleNumberPress(1)}>
            <Text style={styles.numberText}>{1}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={selectedNumbers.includes(2) ? styles.selectedNumberButton : styles.numberButton} onPress={() => handleNumberPress(2)}>
            <Text style={styles.numberText}>{2}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={selectedNumbers.includes(3) ? styles.selectedNumberButton : styles.numberButton} onPress={() => handleNumberPress(3)}>
            <Text style={styles.numberText}>{3}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={selectedNumbers.includes(4) ? styles.selectedNumberButton : styles.numberButton} onPress={() => handleNumberPress(4)}>
            <Text style={styles.numberText}>{4}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={selectedNumbers.includes(5) ? styles.selectedNumberButton : styles.numberButton} onPress={() => handleNumberPress(5)}>
            <Text style={styles.numberText}>{5}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={selectedNumbers.includes(6) ? styles.selectedNumberButton : styles.numberButton} onPress={() => handleNumberPress(6)}>
            <Text style={styles.numberText}>{6}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={selectedNumbers.includes(7) ? styles.selectedNumberButton : styles.numberButton} onPress={() => handleNumberPress(7)}>
            <Text style={styles.numberText}>{7}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={selectedNumbers.includes(8) ? styles.selectedNumberButton : styles.numberButton} onPress={() => handleNumberPress(8)}>
            <Text style={styles.numberText}>{8}</Text>
          </TouchableOpacity>
      </View>
      </View>
      </View>
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    marginBottom: 20,
  },
  numberTable: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  numberButton: {
    flex: 1,
    height: 60,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedNumberButton: {
    flex: 1,
    height: 60,
    backgroundColor: '#aaa',
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});