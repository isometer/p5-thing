let capture;

function setup() {
  noCanvas();
}

async function showCamera() {
  capture = createCapture(VIDEO);
  capture.parent('camera')
}

async function display() {
  displayType = localStorage.getItem("display");

  if (displayType === "User Name") {
    parent = document.getElementById("camera");
    child = document.createElement("div");
    child.className = "username-display";
    child.id = "username-display";
    child.textContent = localStorage.getItem("userName");
    parent.appendChild(child);
  } else {
    parent = document.getElementById("camera");
    child = document.getElementById("username-display");
    if(child) {
      parent.removeChild(parent);
    }
  }
  
  if (displayType === "Camera") {
    showCamera();
  } else {
    capture.remove();
  }
}

window.onload = async function() {
  title = document.getElementById("meeting-name");

  display();

  meetingName = localStorage.getItem("meetingName");

  if(meetingName) {
    title.innerHTML = meetingName;
  } else {
    title.innerHTML = "Unnamed Meeting";
  }
}

