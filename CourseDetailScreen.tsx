import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Props {
  route: any;
}

export default function CourseDetailsScreen({ route }: Props) {
  const { course } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{course.title}</Text>
      <Text>{course.content}</Text>
      <Text>Fee: R{course.fee}</Text>

      {/* Button to navigate to Course Form */}
      <Button
        title="Register for Course"
        onPress={() => navigation.navigate('CourseForm', { course })}
      />

      {/* Button to navigate to ContactScreen */}
      <Button
        title="Contact Us"
        onPress={() => navigation.navigate('Contact')}
        style={styles.contactButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  contactButton: { marginTop: 20 },
});