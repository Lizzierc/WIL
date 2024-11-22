import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

const sixMonthCourses = [
  {
    id: 1,
    title: 'First Aid',
    purpose: 'To provide first aid awareness and basic life support',
    fee: 1500,
    content: 'Wounds and bleeding, Burns and fractures, Emergency scene management, CPR, Respiratory distress...'
  },
  {
    id: 2,
    title: 'Sewing',
    purpose: 'To provide alterations and new garment tailoring services',
    fee: 1500,
    content: 'Types of stitches, Threading a sewing machine, Sewing buttons, zips, hems, and seams, Alterations, Designing new garments...'
  },
  {
    id: 3,
    title: 'Landscaping',
    purpose: 'To provide landscaping services for new and established gardens',
    fee: 1500,
    content: 'Indigenous and exotic plants, Fixed structures, Balancing of plants and trees, Aesthetics of plant shapes, Garden layout...'
  },
  {
    id: 4,
    title: 'Life Skills',
    purpose: 'To provide skills to navigate basic life necessities',
    fee: 1500,
    content: 'Opening a bank account, Basic labour law, Basic reading and writing literacy, Basic numeric literacy...'
  },
];

interface Props {
  navigation: NavigationProp<any>;
}

export default function SixMonthCoursesScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Six Months Courses</Text>
      {sixMonthCourses.map((course) => (
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