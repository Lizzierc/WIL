# WIL

Purpose of Logging
Debugging:
Logs help identify bugs or unexpected behavior by showing what happens step-by-step in the application.
For example, if a course doesn't navigate correctly, a log like console.log('Navigating to CourseDetailsScreen') can help verify if the navigation function is triggered.
Understanding User Actions:
Logs can track what users do, such as selecting a course or navigating to a specific screen.
For example: console.log('Selected course: First Aid') ensures that the user’s selection is captured.
Validating Data Flow:
Logs can confirm whether data is correctly passed between screens, such as course details or calculated fees.
For example: console.log(\Course Title: ${course.title}, Fee: R${course.fee}`)`.
Logging in Different Components
1. Screen Rendering Logs
Example: console.log('HomeScreen rendered')
Purpose: Confirms that a particular screen is loaded. If a screen doesn't appear, the absence of this log indicates a rendering issue.
2. Navigation Logs
Example:
tsx
Copy code
console.log('Navigating to SixMonthCoursesScreen');
Purpose: Ensures the navigation functions are triggered correctly and the app is transitioning to the intended screen. Useful for identifying broken links or misconfigured navigation.
3. Data Passing Logs
Example:
tsx
Copy code
console.log(`Course Title: ${course.title}, Fee: R${course.fee}`);
Purpose: Confirms the data passed between components, such as when a course's details are sent to the CourseDetailsScreen. This helps ensure no critical information is lost or misinterpreted.
4. Action-Specific Logs
Example:
tsx
Copy code
console.log('Calculator button clicked');
Purpose: Tracks user interactions with buttons or other UI elements. Helps debug actions that should trigger certain behaviors, like calculating fees.
5. Dynamic Logs
Example:
tsx
Copy code
console.log(`Selected course: ${course.title}`);
Purpose: Logs the values of dynamically generated items (like a list of courses). Useful for verifying that the app responds to dynamic input correctly.


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import SixWeekCoursesScreen from './SixWeeksCoursesScreen';
import SixMonthCoursesScreen from './SixMonthsCoursesScreen';
import CourseDetailsScreen from './CourseDetailScreen';
import CourseFormScreen from './CourseFormScreen';
import ContactScreen from './ContactScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SixWeekCourses" component={SixWeekCoursesScreen} />
        <Stack.Screen name="SixMonthCourses" component={SixMonthCoursesScreen} />
        <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
        <Stack.Screen name="CourseForm" component={CourseFormScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


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
