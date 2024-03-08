import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Screen from "../components/Screen";

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "Power Guy",
              description: "I want to workout with you man.",
              image: require("../assets/pozaProfil2.jpg"),
            },
            {
              id: 2,
              title: "Arnold",
              description: "See you in the iron paradise.",
              image: require("../assets/arnold.jpg"),
            },
            {
              id: 3,
              title: "Calisthenics Guy",
              description: "I'm waiting you at the bars.",
              image: require("../assets/pozaProfil3.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const initialMessages = [
  {
    id: 1,
    title: "Power Guy",
    description: "I want to workout with you man.",
    image: require("../assets/pozaProfil2.jpg"),
  },
  {
    id: 2,
    title: "Arnold",
    description: " See you in the iron paradise.",
    image: require("../assets/arnold.jpg"),
  },
];
export default MessagesScreen;
