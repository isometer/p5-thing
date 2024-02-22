// import p5 from 'p5js/p5.js/p5';
// const p5 = require('p5js');

// console.log("bro")

let capture;

function setup() {
  noCanvas();
  capture = createCapture(VIDEO);
  capture.parent('camera')

  describe('A video stream from the webcam.');
}
