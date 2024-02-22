// idk you could put more stuff here

let capture;

function setup() {
  noCanvas();
  capture = createCapture(VIDEO);
  capture.parent('camera')

  describe('A video stream from the webcam.');
}

window.onload = async function() {
  title = document.getElementById("meeting-name");

  meetingName = localStorage.getItem("meetingName");

  if(meetingName) {
    title.innerHTML = meetingName;
  } else {
    title.innerHTML = "Unnamed Meeting";
  }
}

