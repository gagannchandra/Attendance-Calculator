def calculate_attendance_percentage(total_lectures, total_absent, total_oaa):
    attendance_percentage = 100 - (((total_absent - total_oaa) / total_lectures) * 100)
    return attendance_percentage

# Input from the user
total_lectures = float(input("Enter the total number of lectures: "))
total_absent = float(input("Enter the total number of absences: "))
total_oaa = float(input("Enter the total number of Other Authorized Absences (OAA): "))

attendance_percentage = calculate_attendance_percentage(total_lectures, total_absent, total_oaa)

print(f"Your current attendance percentage is: {attendance_percentage:.2f}%")

flag = input("Would you like to calculate your attendance if you take a leave? (Y/N): ")

if flag.lower() in ["y", "yes"]:
    days = float(input("Enter the number of days you want to take a leave: "))
    lec = days * 8
    attendance_percentage = calculate_attendance_percentage(total_lectures + lec, total_absent + lec, total_oaa)
    print(f"Your attendance percentage after taking leave is: {attendance_percentage:.2f}%")
    print("\nThank you for using the Attendance Calculator!")
else:
    print("\nThank you for using the Attendance Calculator!")
