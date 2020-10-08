import React, { useState } from "react";
import { Dimensions, StyleSheet, View, Platform } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { Input, Text, Button } from "react-native-elements";
export default function LoginForm({ handleSubmit }) {
  const [input, setInput] = useState({ email: null, password: null });

  return (
    <View style={styles.form}>
      <Text h4 style={styles.text}>
        Email
      </Text>
      <Input
        style={styles.text}
        leftIcon={{
          type: "font-awesome",
          name: "envelope",
          size: 24,
          color: "white",
        }}
        testID="email"
        onChangeText={(e) =>
          setInput((prevState) => ({
            ...prevState,
            email: e,
          }))
        }
      />
      <Text h4 style={styles.text}>
        Password
      </Text>
      <Input
        style={styles.text}
        leftIcon={{
          type: "font-awesome",
          name: "lock",
          size: 30,
          color: "white",
        }}
        testID="password"
        secureTextEntry={true}
        onChangeText={(e) =>
          setInput((prevState) => ({
            ...prevState,
            password: e,
          }))
        }
      />

      <Button
        testID="login-btn"
        onPress={() => handleSubmit(input)}
        title="Submit"
        type="outline"
        buttonStyle={styles.text}
        titleStyle={styles.text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    alignItems: "center",
    width: Dimensions.get("screen").width,
    padding: 40,
  },
  text: {
    color: "white",
    borderColor: "white",
  },
});
