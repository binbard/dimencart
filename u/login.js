const formId = "login-form";
const submitButton = document.querySelector("#submit");
const alertBox = document.querySelector(".alert");
var form = document.querySelector("#login-form");

// var inputEmail= document.getElementById("email");
// localStorage.setItem("email", inputEmail.value);

if (loggedIn) {
  document.querySelector("#i-login__lgbox-ulogin").innerHTML = "Dimencart";
  document.querySelector("#i-login__lgbox-continue").innerHTML = "modern era cart";
  document.querySelectorAll("#login-form > .mb-3").forEach(e => e.innerHTML = "")
  document.querySelector("#submit").innerHTML = "Hello, " + username;
  document.querySelector("#emailHelp").innerHTML = `Seems like you are already logged in.
  <a href='' onclick='logout()' class='text-dark fw-bold '><u>Logout?</u></a>`;
}

function loginWait() {
  document.querySelectorAll("#login-form .mb-3").forEach(element => {
    element.innerHTML = "<div style='height:53px'></div>"
  });
  document.querySelector("#emailHelp").innerHTML = "<div style='height:20px'></div>";
  setTimeout(refreshPage, 600);
}

function ulogin() {
  event.preventDefault();
  // document.querySelector("#login-form .mb-3").innerHTML="<div style='height:200px'></div>";

  var uname = document.querySelector("#Username").value;
  console.log(uname);
  // if (uname === null) {
  //   refreshPage();
  // }

  localStorage.setItem('isLoggedIn', 1);
  localStorage.setItem('username', uname);
  window.location.href = "../index.html";
  // console.log(localStorage.getItem('isLoggedIn'));

  //setTimeout(loginWait, 1000);
};


// document.onload = populateForm();