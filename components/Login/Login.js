import React from "react";
import { View, Text } from "react-native";
import LoginForm from "./LoginForm";

export default function Login() {
  const handleSubmit = () => {};
  return (
    <View>
      <Text testID="login">Login</Text>
      <LoginForm handleSubmit={handleSubmit} />
    </View>
  );
}
