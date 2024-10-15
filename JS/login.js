
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



var currentUser=""
document.getElementById("loginsubmit").addEventListener("click", function(event){
  var username=document.getElementById("username").value
  var passwd=document.getElementById("passwd").value
  
  event.preventDefault()
  
  // Validate the username
  if (username === '') {
    document.getElementById('userspan').innerText = 'user name is required.';
  }else {
    document.getElementById('userspan').innerText = '';

    for (var i = 0; i < localStorage.length; i++)
    {
      if(username!==JSON.parse(localStorage.getItem(localStorage.key(i))).username)
      {
        document.getElementById('userspan').innerText ="Invaild username"; 
      }else {
        document.getElementById('userspan').innerText =""; 
        break;
      }
    }
  }

  // Validate the password
  if (passwd === '') {
    document.getElementById('passwordspan').innerText ="password is required";

  }else {
    document.getElementById('passwordspan').innerText ="";
    if(passwd!==(JSON.parse(localStorage.getItem(username))).passwd)
    {
      document.getElementById('passwordspan').innerText ="Invaild password"; 
    }else {
      document.getElementById('passwordspan').innerText ="";

      console.log((JSON.parse(localStorage.getItem(username))).Admin)
      if((JSON.parse(localStorage.getItem(username))).Admin===false)
      {
        window.location.assign("../HTML/Emp_home.html")
        currentUser=username
            window.sessionStorage.setItem("currentUser",username)
            console.log(username+"is logged in :) ")
      }else {
      window.location.assign("../HTML/home.html")
            currentUser=username
            window.sessionStorage.setItem("currentUser",username)
            console.log(username+"is logged in :) ")
          }
    }
  }


  
  
});