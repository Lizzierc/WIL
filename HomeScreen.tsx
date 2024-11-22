import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/skillsetgo.png')} // Adjust the path according to your project structure
        style={styles.logo}
        resizeMode="contain" // Ensures the logo maintains its aspect ratio
      />
      <Text style={styles.header}>SkillSetGo </Text>
      <Button
        title="Six Weeks Courses"
        onPress={() => navigation.navigate('SixWeekCourses')}
        color="#007BFF" // Optional: Change button color
      />
      <View style={styles.spacer} />
      <Button
        title="Six Months Courses"
        onPress={() => navigation.navigate('SixMonthCourses')}
        color="#007BFF" // Optional: Change button color
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  logo: {
    width: 300, // Adjust width as needed
    height: 300, // Adjust height as needed
    marginBottom: 20, // Space between logo and header
    alignSelf: 'center', // Center the logo
  },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  spacer: { height: 20 }, // Added spacer between buttons
});
