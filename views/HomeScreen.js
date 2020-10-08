import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Test Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Details</Text>
      </TouchableOpacity>
    </View>
  );
}
