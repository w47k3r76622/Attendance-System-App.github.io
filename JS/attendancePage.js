function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  // Att_times:0, 
  // Late_times:0,
  // Absent_times:0,
  // Att_at:"time"

function attendance()
{
  
  var attendanceUser=document.getElementById("attendanceUser").value
  var emp=JSON.parse(localStorage.getItem(attendanceUser))
  var time = new Date().getHours() + ":" + new Date().getMinutes();
  sessionStorage.setItem("attendanceTime",`${time}`);

   if(time.split(":")[0]<9)
   {   
      emp["Att_times"]=emp["Att_times"]+1
      emp['Att_at']=time
      window.localStorage.setItem(attendanceUser,JSON.stringify(emp))
      console.log((JSON.parse(localStorage.getItem(attendanceUser))).Att_times)
   }
   else if(time.split(":")[0]<12)
   {
    emp['Att_at']=time
    emp["Att_times"]=emp["Att_times"]+1
    emp["Late_times"]=emp["Late_times"]+1
    window.localStorage.setItem(attendanceUser,JSON.stringify(emp))
    console.log((JSON.parse(localStorage.getItem(attendanceUser))).Att_times)
    console.log((JSON.parse(localStorage.getItem(attendanceUser))).Late_times)

  }else 
   {
    emp['Att_at']= Absent
    emp['Absent_times']=emp['Absent_times']+1;
    window.localStorage.setItem(attendanceUser,JSON.stringify(emp))
    console.log((JSON.parse(localStorage.getItem(attendanceUser))).Absent_times++)
   }




    

}
