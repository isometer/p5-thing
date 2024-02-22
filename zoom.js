let capture;

function setup() {
  noCanvas();
  showCamera();
}

function showCamera() {
  capture = createCapture(VIDEO);
  capture.parent('camera')
}

function changeDisplayType(type) {

  if (type === "User Name") {
    parent = document.getElementById("camera");
    child = document.createElement("div");
    child.className = "username-display";
    child.id = "username-display";
    child.textContent = localStorage.getItem("userName");
    parent.appendChild(child);
  } else {
    parent = document.getElementById("camera");
    parent.removeChild(document.getElementById("username-display"));
  }
  
  if (type === "Camera") {
    showCamera();
  } else {
    capture.remove();
  }

}

function changeUserName(name) {
  localStorage.setItem('userName', name);
  if (localStorage.getItem("display") === "User Name") {
    document.getElementById("username-display").textContent = name;
  }
}


window.onload = async function(){

  // defaults
  localStorage.setItem("meetingName", "Unnamed Meeting");
  localStorage.setItem("userName", "Anonymous");
  localStorage.setItem("display", "Camera");

  var meetingNameInputElement = document.getElementById('meetingNameInput');

  meetingNameInputElement.addEventListener('input', function() {
      
      var name = document.getElementById('meetingNameInput').value;
      localStorage.setItem('meetingName', name);

  });

  var userNameInputElement = document.getElementById('userNameInput');

  userNameInputElement.addEventListener('input', function() {
      
      var name = document.getElementById('userNameInput').value;
      changeUserName(name);
  });

  var radios = document.getElementsByName("displayType");
 
  for(let i = 0; i < radios.length; i++) {
    let value = radios[i].value
    radios[i].onclick = function() {
      localStorage.setItem("display", value);
      changeDisplayType(value);
    }
  }

}



