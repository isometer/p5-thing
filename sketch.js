let appIcon;
let hooraySound;

let appIconX = 25;
let appIconY = 25;

let appIconWidth = 230;
let appIconHeight = 150;

function hooray(message) {
  // for testing and debugging, a dummy action to confirm that something good happened.
  hooraySound.play();
  console.log("Hooray! " + message);
}

function preload() {
  soundFormats('mp3');
  appIcon = loadImage('/assets/zoom_logo.png');
  hooraySound = loadSound('assets/hooray.mp3');
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  drawAppIcon();
  
}

function drawAppIcon() {

  icon = image(appIcon, appIconX, appIconY, appIconWidth, appIconHeight);

}

function mousePressed() {

  if (  mouseX >= appIconX &&
        mouseX <= appIconX + appIconWidth &&
        mouseY >= appIconY &&
        mouseY <= appIconY + appIconHeight) 
  {
    openApp();
  }

}

function openApp() {

  hooray("app opened successfully.");
  window.location.href="zoom.html";  

}

// fake Zoom

// interaction #1 -- ME
  // open the app (click)

// #2 - Casey
  // start a meeting (click)

// interaction #2
  // slider to change audio levels (slider)

// #3 - Casey
  // upload a profile picture (upload)

// #4  -- ME
  // change your name on Zoom call (typing)

// #5  -- ME
  // toggle between name, profile, camera (?)

// #6 - Casey
  // using the camera 

  