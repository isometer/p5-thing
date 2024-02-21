let appIcon;
let hooray;

function preload() {
  soundFormats('mp3');
  imageFormats('png');
  appIcon = loadImage('assets/zoom_logo.png');
  hooray = loadSound('assets/hooray.mp3');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  icon = img(appIcon, 25, 25, 50, 50);

  drawAppIcon();
  
}

function drawAppIcon() {

  icon = img(appIcon, 25, 25, 50, 50);

  icon.mousePressed(() => openApp());

}

function openApp() {

  hooraySound.play()

}

// fake Zoom

// interaction #1
  // open the app (click)

// #2
  // start a meeting (click)

// interaction #2
  // slider to change audio levels (slider)

// #3
  // upload a profile picture (upload)

// #4 
  // change your name on Zoom call (typing)

// #5 
  // toggle between name, profile, camera (?)

// #6
  // using the camera 