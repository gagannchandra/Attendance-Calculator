# Attendance Calculator

## Overview
This project provides two implementations of an attendance calculator: a Python script and a web-based application. Both calculate a student's attendance percentage based on the total number of lectures, absences, and Other Authorized Absences (OAA). They also allow users to project their attendance percentage if they take additional leave.

## Features
- Calculates attendance percentage using the formula:  
  `Attendance % = 100 - (((Total Absences - OAA) / Total Lectures) * 100)`
- Accepts user input for total lectures, absences, and OAA.
- Optionally calculates the impact of additional leave on attendance percentage.
- Handles inputs as floating-point numbers to accommodate partial lectures or absences.
- Displays results rounded to two decimal places.
- Web version provides a user-friendly interface with styled input fields and buttons.
- Both versions assume 8 lectures per leave day for consistency.

## Prerequisites
### Python Version
- Python 3.x installed on your system.

### Web Version
- A modern web browser (e.g., Chrome, Firefox, Edge).
- No additional software installation required.

## Project Structure
- `attendance_calculator.py`: Python script for command-line usage.
- `index.html`: HTML file for the web-based calculator.
- `styles.css`: CSS file for styling the web application.
- `script.js`: JavaScript file for the web application's functionality.

## Usage
### Python Version
1. Run the script in a Python environment (`python attendance_calculator.py`).
2. Enter the total number of lectures when prompted.
3. Enter the total number of absences.
4. Enter the total number of Other Authorized Absences (OAA).
5. The script will display your current attendance percentage.
6. Choose whether to calculate attendance after taking additional leave (Y/N).
7. If "Y" or "yes" is selected, enter the number of leave days (assumes 8 lectures per day).
8. The script will display the updated attendance percentage after the leave.

### Web Version
1. Visit the hosted site at [websitexx.com](http://websitexx.com).
2. Alternatively, for local testing:
   - Place `index.html`, `styles.css`, and `script.js` in the same directory.
   - Open `index.html` in a web browser.
3. Enter the total number of lectures, absences, and OAA in the provided input fields.
4. Click the "Calculate Attendance" button to see your current attendance percentage.
5. To calculate the impact of additional leave, enter the number of leave days in the new field that appears.
6. Click the "Calculate Attendance with Leave" button to see the updated percentage.

## Example
### Python Version
```plaintext
Enter the total number of lectures: 100
Enter the total number of absences: 10
Enter the total number of Other Authorized Absences (OAA): 2
Your current attendance percentage is: 92.00%
Would you like to calculate your attendance if you take a leave? (Y/N): Y
Enter the number of days you want to take a leave: 1
Your attendance percentage after taking leave is: 85.19%

Thank you for using the Attendance Calculator!
```

### Web Version
1. Input on [websitexx.com](http://websitexx.com):
   - Total Lectures: 100
   - Total Absences: 10
   - OAA: 2
2. Click "Calculate Attendance" → Output: "Your current attendance percentage is: 92.00%"
3. Input Leave Days: 1
4. Click "Calculate Attendance with Leave" → Output: "Your attendance percentage after taking leave is: 85.19%"

## Notes
- Ensure all inputs are valid numbers to avoid errors in both versions.
- Both implementations assume 8 lectures per leave day for simplicity. For the Python version, modify the `lec = days * 8` line if needed. For the web version, modify the `lecturesPerDay = 8` line in `script.js`.
- Negative or invalid inputs (e.g., OAA greater than absences) may produce unexpected results. Consider adding input validation for production use.
- The web version uses basic CSS for styling and JavaScript for calculations, ensuring compatibility with modern browsers.

## License
This project is unlicensed and free to use or modify for personal or educational purposes.