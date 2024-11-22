import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const venues = [
  { id: 1, name: 'Venue 1', address: '123 Main Street, Johannesburg', latitude: -26.2041, longitude: 28.0473 },
  { id: 2, name: 'Venue 2', address: '456 West Avenue, Johannesburg', latitude: -26.2051, longitude: 28.0483 },
  { id: 3, name: 'Venue 3', address: '789 North Street, Johannesburg', latitude: -26.2061, longitude: 28.0493 },
];

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Us</Text>
      <Text>Phone: +27 11 123 4567</Text>
      <Text>Email: info@skillsetgo.co.za</Text>

      {venues.map((venue) => (
        <View key={venue.id} style={styles.venueContainer}>
          <Text style={styles.venueText}>{venue.name}</Text>
          <Text>{venue.address}</Text>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: venue.latitude,
              longitude: venue.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}>
            <Marker coordinate={{ latitude: venue.latitude, longitude: venue.longitude }} />
          </MapView>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  venueContainer: { marginBottom: 30 },
  venueText: { fontSize: 18, fontWeight: 'bold' },
  map: { width: '100%', height: 200, marginTop: 10 },
});