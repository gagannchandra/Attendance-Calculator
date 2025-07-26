function calculateAttendancePercentage(totalLectures, totalAbsent, totalOAA) {
    return 100 - (((totalAbsent - totalOAA) / totalLectures) * 100);
}

function calculateAttendance() {
    const totalLectures = parseFloat(document.getElementById('totalLectures').value);
    const totalAbsent = parseFloat(document.getElementById('totalAbsent').value);
    const totalOAA = parseFloat(document.getElementById('totalOAA').value);

    if (isNaN(totalLectures) || isNaN(totalAbsent) || isNaN(totalOAA)) {
        document.getElementById('result').innerHTML = 'Please enter valid numbers.';
        return;
    }

    const attendancePercentage = calculateAttendancePercentage(totalLectures, totalAbsent, totalOAA);
    document.getElementById('result').innerHTML = 
        `Your current attendance percentage is: ${attendancePercentage.toFixed(2)}%`;
    
    // Show leave section
    document.getElementById('leaveSection').style.display = 'block';
}

function calculateLeave() {
    const totalLectures = parseFloat(document.getElementById('totalLectures').value);
    const totalAbsent = parseFloat(document.getElementById('totalAbsent').value);
    const totalOAA = parseFloat(document.getElementById('totalOAA').value);
    const leaveDays = parseFloat(document.getElementById('leaveDays').value);

    if (isNaN(leaveDays)) {
        document.getElementById('leaveResult').innerHTML = 'Please enter a valid number of days.';
        return;
    }

    const lecturesPerDay = 8;
    const additionalLectures = leaveDays * lecturesPerDay;
    const newAttendancePercentage = calculateAttendancePercentage(
        totalLectures + additionalLectures,
        totalAbsent + additionalLectures,
        totalOAA
    );

    document.getElementById('leaveResult').innerHTML = 
        `Your attendance percentage after taking leave is: ${newAttendancePercentage.toFixed(2)}%<br>` +
        `Thank you for using the Attendance Calculator!`;
}