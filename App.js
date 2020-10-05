import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View>
      <StatusBar />
      <Text testID="main-logo">BrewPay</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
