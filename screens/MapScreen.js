import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Modal from "react-native-modal";

const locations = [
  {
    id: 1,
    name: "Body Line - Str. Ciurchi",
    latitude: 47.155170548441134,
    longitude: 27.616646938572213,
  },
  {
    id: 2,
    name: "BodyLine - Str. Alexandru",
    latitude: 47.16123429535102,
    longitude: 27.57164129624501,
  },
  {
    id: 3,
    name: "The Rock Gym",
    latitude: 47.15920719475843,
    longitude: 27.596949625081095,
  },
];

const MapScreen = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMarkerPress = (location) => {
    setSelectedLocation(location);
  };

  const handleCloseModal = () => {
    setSelectedLocation(null);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 47.145856,
          longitude: 27.586655,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {locations.map((location) => (
          <Marker
            key={location.id}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title={location.name}
            onPress={() => handleMarkerPress(location)}
          >
            <Icon name="map-marker" size={30} color="red" />
          </Marker>
        ))}
      </MapView>

      <Modal
        isVisible={selectedLocation !== null}
        onBackdropPress={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.Text}>{selectedLocation?.name}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Set as favorite</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.close} onPress={handleCloseModal}>
            <Icon name="close" size={30} color="#333" />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginLeft: 50,
    backgroundColor: "#3498db",
    padding: 5,
    width: 180,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
  },
  close: {
    position: "absolute",
    top: 2,
    right: 2,
    padding: 10,
  },
  map: {
    flex: 1,
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
  },
  Text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MapScreen;
