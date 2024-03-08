import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import MessagesScreen from "./MessagesScreen";
import AccountScreen from "./AccountScreen";
import MapScreen from "./MapScreen";
import JoinSomeoneScreen from "./JoinSomeoneScreen";
import DateTimePickerScreen from "./DateTimePickerScreen";

const Tab = createBottomTabNavigator();

const HomeTabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarHideOnKeyboard: true,
      tabBarVisibilityAnimationConfig: {
        show: {
          animation: "timing",
          config: { duration: 200 },
        },
        hide: {
          animation: "timing",
          config: { duration: 0 },
        },
      },
    }}
  >
    <Tab.Screen
      name="Messages"
      component={MessagesScreen}
      options={{
        tabBarLabel: "Messages",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="message" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Map"
      component={MapScreen}
      options={{
        tabBarLabel: "Map",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="map-marker" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Programming"
      component={DateTimePickerScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="plus" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Join Someone"
      component={JoinSomeoneScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="handshake" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Your Account"
      component={AccountScreen}
      options={{
        tabBarLabel: "Your Account",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default HomeTabs;
