import React, { useState } from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import { useNavigation } from "@react-navigation/native";
import LoginScreen from "./LoginScreen";

function WelcomeScreen(props) {
  const navigation = useNavigation();
  const goToInfoScreen = () => {
    navigation.navigate("InfoScreen");
  };
  const goToLoginScreen = () => {
    navigation.navigate("LoginScreen");
  };
  return (
    <ImageBackground
      blurRadius={7}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/wop.png")} />
        <Text style={styles.tagline}>
          Your journey is better with the right partener
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" color="primary" onPress={goToLoginScreen} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={goToInfoScreen}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  logo: {
    width: 150,
    height: 150,
    top: 50,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  tagline: {
    fontSize: 30,
    fontWeight: "600",
    paddingVertical: 20,
    width: "50%",
  },
});

export default WelcomeScreen;
