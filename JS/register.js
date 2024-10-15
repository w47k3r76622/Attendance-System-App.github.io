
const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

window.localStorage.setItem("Admin",JSON.stringify({username:"Admin",passwd:"admin"}))


function generate_password() {
let result =
Math.random().toString(36).slice(2) +
Math.random().toString(36)
  .toUpperCase().slice(2);
        return result;
}

function generate_username(newFirstname,newLastname) {
let result =newFirstname+newLastname+'.'+Math.random().toString(10).slice(2)
 
          return result;
}



function sendMail(emaillllll,username,passwd){
    Email.send({
        port:2525,
        SecureToken : "7a2313e2-3157-4c7c-a2dc-8aa3ee0c6981",
        To : emaillllll,
        From : "mohamed.sharif.moawad@gmail.com",
        Subject : "UserName and Password",
        Body : `username:${username} \npassword: ${passwd}\n
        Please, don't share this information!`
    }).then(
      message => alert(message + emaillllll)
    );
}

function registerEmployee()
{
  
    var username=document.getElementById("newUsername").value
    var newPassword=document.getElementById("newPassword").value
    var newLastname=document.getElementById("newLastname").value
    var newEmail=document.getElementById("newEmail").value
    var newFirstname=document.getElementById("newFirstname").value
    var newAge=document.getElementById("age").value
    var address=document.getElementById("address").value
    var job=document.getElementById("job").value
     id = generate_username(newFirstname,newLastname);
     passwd = generate_password();
     newEmployee={
        id:id,
        username:username,
        passwd:newPassword,
        firstname:newFirstname,
        lastname:newLastname,
        Email:newEmail,
        Job:job,
        Address:address,
        Age:newAge,
        Admin:false,
        secuirtyMan:false,
        Att_times:0, 
        Late_times:0,
        Absent_times:0,
        Att_at:"Not yet"
 
    }
  
    // sendMail(newEmail,username,passwd)

window.localStorage.setItem(username,JSON.stringify(newEmployee))

window.location.assign("../HTML/login.html")

  return
}


// function assignAdmin(username)
// {
 
//   var emp=JSON.parse(localStorage.getItem(username))
//   emp["Admin"]=true
//   window.localStorage.setItem(username,JSON.stringify(emp))
 
// }
 
function DefaultAdmin()
{
  var emp=JSON.parse(localStorage.getItem(localStorage.key(0)))
  var empName=JSON.parse(localStorage.getItem(localStorage.key(0))).username
  emp["Admin"]=true
  window.localStorage.setItem(empName,JSON.stringify(emp))
}
 
DefaultAdmin()
 
// function assignSecuitryMan(username)
// {
//   var emp=JSON.parse(localStorage.getItem(username))
//   emp["secuirtyMan"]=true
//   window.localStorage.setItem(username,JSON.stringify(emp))
 
// }
