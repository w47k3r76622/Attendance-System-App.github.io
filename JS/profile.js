
var fullname=JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser"))).username
var age=JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser"))).Age
var email=JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser"))).Email
var address = JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser"))).Address
var job = JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser"))).Job

var latetimes=JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser"))).Late_times
var absenttime=JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser"))).Absent_times
var attendanceTime=JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser"))).Att_times
var time_attendance=JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser"))).Att_at

//first div welcome
document.getElementById('username_').innerHTML += fullname;

//second div: profile info
document.getElementById('username_2').innerHTML += fullname;
document.getElementById('email').innerHTML += email;
document.getElementById('age').innerHTML += age;
document.getElementById('address').innerHTML += address;
document.getElementById('job').innerHTML += job;

//daily report
document.getElementById('attendance_time').innerHTML += time_attendance;
document.getElementById('leaving_time').innerHTML += '15:30';
if (time_attendance === "Not yet")
    {
      document.getElementById('status').innerHTML += "Not in the office"
    }
 else
 {
      document.getElementById('status').innerHTML += "Present Now"
 }

//monthly report
document.getElementById('attendance_times').innerHTML += attendanceTime;
document.getElementById('absent_times').innerHTML += absenttime;
document.getElementById('late_times').innerHTML += latetimes;
