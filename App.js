import React from "react";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./views/HomeScreen";
import Login from "./components/Login/Login";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            component={HomeScreen}
            name="Home"
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
