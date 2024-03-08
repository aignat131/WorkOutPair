import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProgressIndicator = ({ steps, currentStep }) => {
  const circles = [];
  for (let i = 0; i < steps; i++) {
    circles.push(
      <View
        key={i}
        style={[
          styles.circle,
          { backgroundColor: i <= currentStep ? "#007BFF" : "#D3D3D3" },
        ]}
      />
    );
  }
  return <View style={styles.progressContainer}>{circles}</View>;
};

const InfoScreen = () => {
  const navigation = useNavigation();
  const [showInfoScreen, setShowInfoScreen] = useState(true);
  const handleInfoScreenComplete = () => {
    setShowInfoScreen(false);
  };

  const [step, setStep] = useState(0);
  const [Name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [favoriteSport, setFavoriteSport] = useState("");
  const [description, setDescription] = useState("");

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      handleInfoScreenComplete();
      navigation.navigate("Home", {
        screen: "AccountScreen",
        params: {
          user: {
            Name: Name,
            gender: gender,
            age: age,
            favoriteSport: favoriteSport,
            description: description,
          },
        },
      });
    }
  };

  const handleSkip = () => {
    handleInfoScreenComplete();
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <ProgressIndicator steps={5} currentStep={step} />

      <View style={styles.formContainer}>
        <Text style={styles.label}>Enter your info for Step {step + 1}:</Text>

        {step === 0 && (
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={(text) => setName(text)}
            value={Name}
          />
        )}

        {step === 1 && (
          <TextInput
            style={styles.input}
            placeholder="Gender"
            onChangeText={(text) => setGender(text)}
            value={gender}
          />
        )}

        {step === 2 && (
          <TextInput
            style={styles.input}
            placeholder="Age"
            onChangeText={(text) => setAge(text)}
            value={age}
          />
        )}

        {step === 3 && (
          <TextInput
            style={styles.input}
            placeholder="Favorite Sport"
            onChangeText={(text) => setFavoriteSport(text)}
            value={favoriteSport}
          />
        )}

        {step === 4 && (
          <TextInput
            style={styles.input}
            placeholder="Little Description"
            onChangeText={(text) => setDescription(text)}
            value={description}
          />
        )}

        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  formContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  skipButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    borderColor: "#007BFF",
    borderWidth: 1,
  },
  skipButtonText: {
    color: "#007BFF",
    fontSize: 16,
  },
});

export default InfoScreen;
