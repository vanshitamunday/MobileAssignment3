import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import CallAPI from "../components/callAPI";
import DropDownPicker from "react-native-dropdown-picker";

export default function DateFact() {
  const [month, setMonth] = useState<number | null>(null); 
  const [day, setDay] = useState<string>("");
  const [open, setOpen] = useState(false); 

  const months = [
    { label: "January", value: 1 },
    { label: "February", value: 2 },
    { label: "March", value: 3 },
    { label: "April", value: 4 },
    { label: "May", value: 5 },
    { label: "June", value: 6 },
    { label: "July", value: 7 },
    { label: "August", value: 8 },
    { label: "September", value: 9 },
    { label: "October", value: 10 },
    { label: "November", value: 11 },
    { label: "December", value: 12 },
  ];

  const dayNum = parseInt(day);
  const isValidDate = month !== null && dayNum >= 1 && dayNum <= 31;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter a Date to Get a Fact</Text>

      {/* Month Dropdown */}
      <DropDownPicker
        open={open}
        setOpen={setOpen}
        value={month} 
        setValue={setMonth}
        items={months}
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownMenu}
        placeholder="Select a month"
      />

      {/* Show selected month as number */}
      {month !== null && <Text style={styles.selectedText}>Selected Month: {month}</Text>}

      {/* Day Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Day (1-31)"
        keyboardType="numeric"
        value={day}
        onChangeText={setDay}
      />

      {/* Show API data when both inputs are valid */}
      {isValidDate && <CallAPI month={month} day={dayNum} />}
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
    backgroundColor: "#f8f8f8",
  },
  title: { 
    fontSize: 20, 
    fontWeight: "bold", 
    marginBottom: 20 
  },
  dropdownContainer: {
    width: "80%",
    marginBottom: 15,
  },
  dropdown: {
    backgroundColor: "#fafafa",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  dropdownMenu: {
    backgroundColor: "#fafafa",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    textAlign: "center",
  },
  selectedText: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: "bold",
  },
});

