# Attendance Calculator

## Overview
This Python script calculates a student's attendance percentage based on the total number of lectures, absences, and Other Authorized Absences (OAA). It also allows users to project their attendance percentage if they take additional leave.

## Features
- Calculates attendance percentage using the formula:  
  `Attendance % = 100 - (((Total Absences - OAA) / Total Lectures) * 100)`
- Accepts user input for total lectures, absences, and OAA.
- Optionally calculates the impact of additional leave on attendance percentage.
- Handles inputs as floating-point numbers to accommodate partial lectures or absences.
- Displays results rounded to two decimal places.

## Prerequisites
- Python 3.x installed on your system.

## Usage
1. Run the script in a Python environment.
2. Enter the total number of lectures when prompted.
3. Enter the total number of absences.
4. Enter the total number of Other Authorized Absences (OAA).
5. The script will display your current attendance percentage.
6. Choose whether to calculate attendance after taking additional leave (Y/N).
7. If "Y" or "yes" is selected, enter the number of leave days (assumes 8 lectures per day).
8. The script will display the updated attendance percentage after the leave.

## Example
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

## Notes
- Ensure all inputs are valid numbers to avoid errors.
- The script assumes 8 lectures per leave day for simplicity. Modify the `lec = days * 8` line if your institution uses a different number of lectures per day.
- Negative or invalid inputs (e.g., OAA greater than absences) may produce unexpected results. Consider adding input validation for production use.

## License
This project is unlicensed and free to use or modify for personal or educational purposes.