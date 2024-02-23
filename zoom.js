let capture;
let mic;

let size = 100;
let width = 50;
let height = 50;

function setup() {
  noCanvas();
  showCamera();
  startMic();
}

function showCamera() {
  capture = createCapture(VIDEO);
  capture.parent('camera');
}

function startMic() {
  let cnv = createCanvas(width, height);
  cnv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
  cnv.parent('audio');
}

function draw(){
  micLevel = mic.getLevel();
  let ball_size = micLevel*size + size/4;

  background('rgb(255, 255, 255)');
  let fill_color = 'rgba(51, 153, 255,' + ((micLevel * size).toString()) + ')';
  fill(fill_color);
  ellipse(width/2, height/2, ball_size, ball_size);
}

// non-p5js setup

function changeDisplayType(type) {

  parent = document.getElementById("camera");

  if (document.getElementById("pfp-display")) {
    parent.removeChild(document.getElementById("pfp-display"));
  }
  if (document.getElementById("username-display")) {
    parent.removeChild(document.getElementById("username-display"));
  }
  capture.remove();


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
  localStorage.setItem("pfpPath", "assets/blank-pfp.png");
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

  var pfpInputElement = document.getElementById('pfp-input');

  pfpInputElement.addEventListener('input', function() {  
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    
    var pfpPlace = document.getElementById('pfp');
    pfpPlace.src = URL.createObjectURL(event.target.files[0]);
    
    localStorage.setItem('pfpPath', image.src);
  });


  var closeModalElements = document.getElementsByClassName("closeModals");


  for (let i = 0; i < closeModalElements.length; i++) {

    function closeModal() {
      console.log('close modal')
      var modal = document.getElementById('modal-bg');
      modal.style.display = 'none';
    }

    closeModalElements[i].onclick = closeModal;
  }

  var openModalElements = document.getElementsByClassName("openModals");


  for (let i = 0; i < openModalElements.length; i++) {

    console.log('added')
    function openModal() {
      console.log('open modal')
      var modal = document.getElementById('modal-bg');
      modal.style.display = 'flex';
    }

    openModalElements[i].addEventListener('input', openModal);
  
  }

  var audioSliderElement = document.getElementById("audioRange");

  audioSliderElement.addEventListener('input', function() {  
    size = this.value;
  });


  var radios = document.getElementsByName("displayType");
 
  console.log(radios)

  for(let i = 0; i < radios.length; i++) {
    let value = radios[i].value
    radios[i].onclick = function() {
      localStorage.setItem("display", value);
      changeDisplayType(value);
    }
  }

}
