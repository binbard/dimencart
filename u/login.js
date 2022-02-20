const formId = "login-form";
const submitButton = document.querySelector("#submit");
const alertBox = document.querySelector(".alert");
var form = document.querySelector("#login-form");

// var inputEmail= document.getElementById("email");
// localStorage.setItem("email", inputEmail.value);

function loginWait() {
  document.querySelectorAll("#login-form .mb-3").forEach(element => {
    element.innerHTML = "<div style='height:53px'></div>"
    element.value = "OOOOOOOOOO";
  });
  document.querySelector("#emailHelp").innerHTML = "<div style='height:20px'></div>";
  setTimeout(refreshPage, 600);
}

function ulogin() {
  // event.preventDefault();
  // document.querySelector("#login-form .mb-3").innerHTML="<div style='height:200px'></div>";

  var uname = document.querySelector("#Username").value;
  console.log(uname);
  if (uname === null) {
    refreshPage();
  }
  else {
    localStorage.setItem('isLoggedIn', 1);
    localStorage.setItem('username', uname);
    console.log(localStorage.getItem('isLoggedIn'));
  }
  //setTimeout(loginWait, 1000);
};


// document.onload = populateForm();