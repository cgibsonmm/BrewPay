import Axios from "axios";
import React, { useState } from "react";
import { View, Text } from "react-native";
import LoginForm from "./LoginForm";

export default function Login() {
  const [res, setRes] = useState(null);
  const handleSubmit = async () => {
    let resp = await Axios.get("/");
    setRes(resp.data.message);
  };
  return (
    <View>
      <Text testID="login">Login</Text>
      <LoginForm handleSubmit={handleSubmit} />
      <Text>{res}</Text>
    </View>
  );
}
