import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeTabs from "./screens/HomeTabs";
import InfoScreen from "./screens/InfoScreen";
import AccountDetailsScreen from "./screens/AccountDetailsScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="InfoScreen" component={InfoScreen} />
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="AccountDetails" component={AccountDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
