import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

// API Key and Host
const API_KEY = "8b8d2f1bf1msh8f6c879caf63c03p124f6ejsn377fb0e24f5c";
const API_HOST = "numbersapi.p.rapidapi.com";


export default function CallAPI({ month, day } : { month: number, day: number }) {
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (month && day) {
      getFact(month, day);
    }
  }, [month, day]); 

  // Function to Fetch API Data
  const getFact = async (month: number, day: number) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://${API_HOST}/${month}/${day}/date?json=true`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": API_HOST,
          },
        }
      );

      const data = await response.json();
      setFact(data.text);
    } catch (err) {
      setError("Error fetching data. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="blue" />}
      {error && <Text style={styles.errorText}>{error}</Text>}
      {fact && <Text style={styles.factText}>{fact}</Text>}
    </View>
  );
}


const styles = StyleSheet.create({
  container: 
  { marginTop: 20, 
    alignItems: "center" 
},
  factText: 
  { fontSize: 18, 
    fontWeight: "bold", 
    textAlign: "center", 
    marginTop: 10 
},
  errorText: 
  { fontSize: 16, 
    color: "red" 
},
});
