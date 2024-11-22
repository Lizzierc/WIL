import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Sample course data with fees
const courses = [
  { id: 1, title: 'Child Minding', fee: 750 },
  { id: 2, title: 'Cooking', fee: 750 },
  { id: 3, title: 'Garden Maintenance', fee: 750 },
  { id: 4, title: 'First Aid', fee: 1500},
  { id: 5, title: 'Sewing', fee: 1500},
  { id: 6, title: 'Landscaping', fee: 1500},
  { id: 7, title: 'Life Skills', fee: 1500},
];

export default function CourseFormScreen() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]); // Store selected courses
  const [totalFee, setTotalFee] = useState(0); // Store total fee
  const navigation = useNavigation();

  const handleCourseSelect = (course) => {
    // Add or remove courses from the selection
    setSelectedCourses((prevSelectedCourses) =>
      prevSelectedCourses.includes(course)
        ? prevSelectedCourses.filter((c) => c !== course)
        : [...prevSelectedCourses, course]
    );
  };

  const calculateTotal = () => {
    if (selectedCourses.length === 0) {
      Alert.alert("No courses selected", "Please select at least one course.");
      return;
    }

    const baseTotal = selectedCourses.reduce((sum, course) => sum + course.fee, 0);
    const discount = baseTotal > 200 ? 0.1 * baseTotal : 0; // 10% discount for orders above $200
    const totalWithDiscount = baseTotal - discount;
    const vat = totalWithDiscount * 0.15;
    const finalTotal = totalWithDiscount + vat;

    setTotalFee(finalTotal.toFixed(2)); // Set total fee with 2 decimal places
  };

  const handleSubmit = () => {
    if (name && phone && email && selectedCourses.length > 0) {
      Alert.alert("Form Submitted", "We will contact you soon.");
    } else {
      Alert.alert("Form Incomplete", "Please fill in all details and select courses.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register for Courses</Text>

      <TextInput
        placeholder="Enter your name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Enter your phone number"
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        placeholder="Enter your email address"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.subHeader}>Select Courses</Text>
     
      {/* Display courses with fees */}
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.courseItem}>
            <Text>{item.title} - R{item.fee}</Text>
            <Button
              title={selectedCourses.includes(item) ? "Remove" : "Add"}
              onPress={() => handleCourseSelect(item)}
            />
          </View>
        )}
      />

      {/* Calculate total fee */}
      <Button
        title="Calculate Total"
        onPress={calculateTotal}
        style={styles.calculateButton}
      />
     
      {/* Display total fee if calculated */}
      {totalFee > 0 && (
        <Text style={styles.totalText}>Total Quoted Fee (incl. VAT): R{totalFee}</Text>
      )}

      {/* Submit form */}
      <Button
        title="Submit Registration"
        onPress={handleSubmit}
        style={styles.submitButton}
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
  subHeader: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10
  },
  courseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  calculateButton: { marginTop: 20 },
  totalText: { fontSize: 18, fontWeight: 'bold', marginTop: 20 },
  submitButton: { marginTop: 20 },
  contactButton: { marginTop: 20 },
});

