import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import CallAPI from "../components/callAPI";
import DropDownPicker from 'react-native-dropdown-picker';

export default function DateFact() {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const monthNum = parseInt(month);
  const dayNum = parseInt(day);
  const isValidDate = monthNum >= 1 && monthNum <= 12 && dayNum >= 1 && dayNum <= 31;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter a Date to Get a Fact</Text>

      {/* Month Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Month (1-12)"
        keyboardType="numeric"
        value={month}
        onChangeText={setMonth}
      />

      {/* Day Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Day (1-31)"
        keyboardType="numeric"
        value={day}
        onChangeText={setDay}
      />

      {isValidDate && <CallAPI month={monthNum} day={dayNum} />}
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    padding: 20,
    backgroundColor: "#f8f8f8",},
  title: { 
    fontSize: 20, 
    fontWeight: "bold", 
    marginBottom: 20 },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    textAlign: "center",
  },
});

