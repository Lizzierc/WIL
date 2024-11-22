import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

const sixWeekCourses = [
  {
    id: 1,
    title: 'Child Minding',
    purpose: 'To provide basic child and baby care',
    fee: 750,
    content: 'Birth to six-month old baby needs, Seven-month to one year old needs, Toddler needs, Educational toys...'
  },
  {
    id: 2,
    title: 'Cooking',
    purpose: 'To prepare and cook nutritious family meals',
    fee: 750,
    content: 'Nutritional requirements for a healthy body, Types of protein, carbohydrates, and vegetables, Planning meals, Preparation and cooking of meals...'
  },
  {
    id: 3,
    title: 'Garden Maintenance',
    purpose: 'To provide basic knowledge of watering, pruning and planting in a domestic garden',
    fee: 750,
    content: 'Water restrictions, Watering requirements of indigenous and exotic plants, Pruning, Planting techniques for different plant types...'
  },
];

interface Props {
  navigation: NavigationProp<any>;
}

export default function SixWeeksCoursesScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Six Weeks Courses</Text>
      {sixWeekCourses.map((course) => (
        <Button
          key={course.id}
          title={`${course.title} - R${course.fee}`}
          onPress={() => navigation.navigate('CourseDetails', { course })}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
});

