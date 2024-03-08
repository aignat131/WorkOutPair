import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import { StyleSheet, View, FlatList } from "react-native";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";
import Icon from "../components/Icon";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

function AccountScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const user = route.params;

  const goToAccountDetails = () => {
    navigation.navigate("AccountDetails", { params: user });
  };
  const goToMessages = () => {
    navigation.navigate("Messages");
  };
  const menuItems = [
    {
      title: "My profile",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
      },
      onPress: goToAccountDetails,
    },
    {
      title: "My messages",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
      },
      onPress: goToMessages,
    },
  ];

  return (
    <Screen style={styles.screen}>
      <ListItem
        title="Humble Guy"
        subTitle="humbleGuy@beFit.com"
        image={require("..//assets/pozaProfil.jpg")}
      />

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={item.onPress}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>

      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        // Add onPress logic for "Log Out" as needed
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
