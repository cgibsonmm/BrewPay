import Axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";
// import { View } from "react-native-safe-area-context";
import LoginForm from "./LoginForm";
// import AppleLogin from "./AppleLogin";
import { Text } from "react-native-elements";

import BackGroundImage from "../../assets/bar.jpg";

export default function Login() {
  const [res, setRes] = useState(null);
  const handleSubmit = async () => {
    let resp = await Axios.get("/");
    setRes(resp.data.message);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <ImageBackground source={BackGroundImage} style={styles.image}>
            <View style={styles.shader}>
              <Text h4 testID="login" style={styles.text}>
                LOGIN
              </Text>
              <LoginForm handleSubmit={handleSubmit} />
              <Text>{res}</Text>
              {/* <AppleLogin /> */}
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "space-around",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  shader: {
    backgroundColor: "rgba(0,0,0,0.9)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "white",
  },
});
