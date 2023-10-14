//login form
function login1() {
  var username = document.forms["login"]["username"].value;
  var pwd = document.forms["login"]["pwd"].value;

  
  if (username == null || username == "") {
    document.getElementById("errorbox").innerHTML = "*Enter username";
    return false;
  }
  if (pwd == null || pwd == "") {
    document.getElementById("errorbox").innerHTML = "*Enter password";
    return false;
  }
  if (username != "" && pwd != "") {
    //window.location.href = "register.html";
    alert("Login Succesful!");
  }
}

//register form
function register1() {
  var uname = document.forms["register"]["uname"].value;
  var pswd = document.forms["register"]["pswd"].value;
  var email = document.forms["register"]["email"].value;
  var repswd = document.forms["register"]["repswd"].value;

  if (uname == null || uname == "") {
    document.getElementById("errorbox").innerHTML = "*Enter username";
    return false;
  }
  if (email == null || email == "") {
  	document.getElementById("errorbox").innerHTML = "*Enter Email";
  	return false
  }
  if (pswd == null || pswd == "") {
    document.getElementById("errorbox").innerHTML = "*Enter password";
    return false;
  }
  if (repswd == null || repswd == "") {
    document.getElementById("errorbox").innerHTML = "*Re-enter password";
    return false;
  }
  if (pswd != repswd) {
 	document.getElementById("errorbox").innerHTML = "*Passwords don't match"
 	return false;
  }

  if (uname != "" && email != "" && pswd != "" && repswd != "") {
    alert("Login Succesful!");
  }
}

function home2(){
  
}