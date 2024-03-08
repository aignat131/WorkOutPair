import React from "react";
import Screen from "../components/Screen";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";

const listings = [
  {
    id: 1,
    title: "Power Guy",
    subTitle: "This workout I'm going to hit legs.",
    image: require("../assets/pozaProfil2.jpg"),
  },
  {
    id: 2,
    title: "Arnold S.",
    subTitle: "Let's smash the chest together",
    image: require("../assets/arnold.jpg"),
  },
  {
    id: 3,
    title: "Calisthenics Guy",
    subTitle: "We need only the bar.",
    image: require("../assets/pozaProfil3.jpg"),
  },
];

function ListingScreen(props) {
  const navigation = useNavigation();
  const goToProfile = () => {
    navigation.navigate("AccountDetails");
  };
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={goToProfile}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
