import React from "react";
import { View, Text } from "react-native";

const LocationDetailsScreen = ({ route }) => {
  const { location } = route.params;

  return (
    <View>
      <Text>Location Details</Text>
      <Text>Name: {location.name}</Text>
      <Text>Latitude: {location.latitude}</Text>
      <Text>Longitude: {location.longitude}</Text>
    </View>
  );
};

export default LocationDetailsScreen;
