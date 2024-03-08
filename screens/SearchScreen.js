import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { SearchBar } from "react-native-elements";
import colors from "../config/colors";
import Card from "../components/Card";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  const [search, setSearch] = useState("");
  const [filteredCards, setFilteredCards] = useState(initialCards);

  // Sample card data
  const initialCards = [
    {
      id: 1,
      title: "Card 1",
      subTitle: "Subtitle 1",
      image: require("../assets/munte1.jpg"),
    },
    {
      id: 2,
      title: "Card 2",
      subTitle: "Subtitle 2",
      image: require("../assets/munte2.jpg"),
    },
    {
      id: 3,
      title: "Card 3",
      subTitle: "Subtitle 3",
      image: require("../assets/munte1.jpg"),
    },
    {
      id: 4,
      title: "Card 4",
      subTitle: "Subtitle 4",
      image: require("../assets/munte2.jpg"),
    },
  ];
  const user = {
    name: "John Doe",
    gender: "Male",
    passions: ["Reading", "Traveling", "Coding"],
    description: "A passionate individual with diverse interests.",
  };
  const navigation = useNavigation();
  const goToAccountDetails = () => {
    navigation.navigate("AccountDetails", user);
  };

  const updateSearch = (text) => {
    setSearch(text);

    const filtered = initialCards.filter((card) =>
      card.title.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredCards(filtered);
  };

  const renderCard = ({ item }) => (
    <Card
      title={item.title}
      subTitle={item.subtitle}
      image={item.image}
      onPress={goToAccountDetails}
    />
  );

  return (
    <View>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
        containerStyle={{
          backgroundColor: colors.white,
          borderTopWidth: 0,
          borderBottomWidth: 0,
        }}
        inputContainerStyle={{
          backgroundColor: colors.light,
          borderRadius: 30,
        }}
      />
      <FlatList
        data={filteredCards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCard}
      />
    </View>
  );
};

export default SearchScreen;
