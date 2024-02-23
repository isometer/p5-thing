let capture;

function setup() {
  noCanvas();
}

async function showCamera() {
  capture = createCapture(VIDEO);
  capture.parent('camera')
}

async function display() {

  type = localStorage.getItem("display");

  parent = document.getElementById("camera");

  if (document.getElementById("pfp-display")) {
    parent.removeChild(document.getElementById("pfp-display"));
  }
  else if (document.getElementById("username-display")) {
    parent.removeChild(document.getElementById("username-display"));
  }
  else if (capture) {
    capture.remove();
  }

  if (type === "User Name") {
    var child = document.createElement("div");
    child.className = "username-display";
    child.id = "username-display";
    child.textContent = localStorage.getItem("userName");
    parent.appendChild(child);
    
  } 
  else if (type === "Proile Picture") {
    var child = document.createElement("div");

    child.style.display = 'flex';
    child.style.justifyContent = 'center';
    child.style.alignContent = 'center';
    child.id = "pfp-display";
    child.className = "pfp-display";

    var pfp = document.createElement("img");
    pfp.src = localStorage.getItem("pfpPath");
    pfp.height = 350;
    pfp.width = 350;
    pfp.id = 'pfp';
    pfp.alt = "user's profile picture"

    child.append(pfp)
    parent.appendChild(child);
  }
  else if (type === "Camera") {
    showCamera();
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

