
$(function () {
    $("#username").text(usernameText);
    showMonthReport();
    showDailyReport();
})
var usernameText =sessionStorage.getItem("username");

async function showMonthReport() {
    var reports,jsonReports;

    reports = await fetch("employees.json");
    jsonReports = await reports.json();
    var obj= jsonReports.find((report)=> report.username === usernameText);
    var date = new Date().getDate();
    $("#attendanceCount").text(obj.attendanceNo);
    $("#lateCount").text(obj.lateNo);
    $("#abscenceCount").text(obj.abscenceNo);
    }

async function showDailyReport() {
    var reports,jsonReports;
    var time = sessionStorage.getItem("attendanceTime");
    reports = await fetch("employees.json");
    jsonReports = await reports.json();
    var obj= jsonReports.find((report)=> report.username === usernameText);
    $("#attendentTime").text(time);
}
