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


www.youtube.com/@RelebogileMaponya-sb1gr

https://youtu.be/iYFsYPpeuk8?si=ue9sexvXGRblQOY8
console.log(`Selected course: ${course.title}`);
Purpose: Logs the values of dynamically generated items (like a list of courses). Useful for verifying that the app responds to dynamic input correctly.




