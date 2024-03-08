import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AccountDetailsScreen = ({ navigation }) => {
  //const route = useRoute();
  //const user = route.params;
  const user = {
    Name: "Humble guy",
    gender: "Boy",
    age: 23,
    favoriteSport: "Gym",
    description: "I like to lift a ton of weight.",
  };

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <TouchableHighlight
          onPress={handleClose}
          style={styles.closeButton}
          underlayColor="#DDDDDD" // Set the color when the button is touched
        >
          <MaterialCommunityIcons name="close" size={24} color="black" />
        </TouchableHighlight>

        <View style={styles.section}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.text}>{user.Name}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Age:</Text>
          <Text style={styles.text}>{user.age}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.text}>{user.gender}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Passions:</Text>
          <Text style={styles.text}>{user.favoriteSport}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.text}>{user.description}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 20,
  },
  section: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    padding: 10,
  },
});

export default AccountDetailsScreen;
