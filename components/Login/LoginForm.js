import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export default function LoginForm({ handleSubmit }) {
  const [input, setInput] = useState({ email: null, password: null });

  return (
    <View>
      <Text>Email</Text>
      <TextInput
        testID="email"
        onChangeText={(e) =>
          setInput((prevState) => ({
            ...prevState,
            email: e,
          }))
        }
      />
      <Text>Password</Text>
      <TextInput
        testID="password"
        onChangeText={(e) =>
          setInput((prevState) => ({
            ...prevState,
            password: e,
          }))
        }
      />

      <TouchableOpacity testID="login-btn" onPress={() => handleSubmit(input)}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
