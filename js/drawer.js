import { kathete } from './calculator.js';

let canvasWrapper = document.getElementById('canvaswrapper');
var canvas = document.getElementById('canvas-dreieck');
var ctx = canvas.getContext('2d');

new ResizeObserver(resizeCanvas).observe(canvasWrapper);

let coordinates = {};
let scaledCoordinates = {};
let canvasWidth;
let canvasHeight;


function resizeCanvas() {
  console.debug("resizing");
  canvasWidth = canvasWrapper.clientWidth;
  canvasHeight = canvasWrapper.clientHeight;

  canvas.setAttribute('width', canvasWidth);
  canvas.setAttribute('height', canvasHeight);

  clearCanvas();

  if (coordinates.a) {
    fitToCanvas();
    drawTriangle();
  }
}

export function draw(v) {
  calculateCoordinates(v);
  fitToCanvas();
  drawTriangle();
}


function calculateCoordinates(v) {
  let c_x = kathete(v.a, v.hoehe_C);

  coordinates.a = { x: v.c, y: 0 };
  coordinates.b = { x: 0, y: 0 };
  coordinates.c = { x: c_x, y: v.hoehe_C };
}

function fitToCanvas() {
  let ratio = calculateScalingRatio();

  scaledCoordinates.a = { x: coordinates.a.x / ratio, y: 0 };
  scaledCoordinates.b = { x: 0, y: 0 };
  scaledCoordinates.c = { x: coordinates.c.x / ratio, y: coordinates.c.y / ratio };

  let triangleHeight = scaledCoordinates.c.y;
  let hShift = (canvasWidth - scaledCoordinates.a.x) / 2;
  let vShift = (canvasHeight - scaledCoordinates.c.y) / 2;

  scaledCoordinates.a.y = scaledCoordinates.a.y + triangleHeight;
  scaledCoordinates.b.y = scaledCoordinates.b.y + triangleHeight;
  scaledCoordinates.c.y = scaledCoordinates.c.y - triangleHeight;


  scaledCoordinates.a = { x: scaledCoordinates.a.x + hShift, y: scaledCoordinates.a.y + vShift };
  scaledCoordinates.b = { x: scaledCoordinates.b.x + hShift, y: scaledCoordinates.b.y + vShift };
  scaledCoordinates.c = { x: scaledCoordinates.c.x + hShift, y: scaledCoordinates.c.y + vShift };

}

function calculateScalingRatio() {
  let hRatio = coordinates.a.x / (canvasWidth - 50);
  let vRatio = coordinates.c.y / (canvasHeight - 50);

  return hRatio > vRatio ? hRatio : vRatio;
}

/*
beginPath()
    Erstellt einen Pfad und beendet ggf. einen älteren.
closePath()
    Beendet den Pfad und verbindet den Startpunkt mit dem Endpunkt.
stroke()
    Zeichnet die Kontur des Pfades.
fill()
    Zeichnet die Füllung des Pfades. 
arc() zeichnet einen Kreisbogen.
*/
function drawTriangle() {
  ctx.lineWidth = 3;
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(scaledCoordinates.a.x, scaledCoordinates.a.y);
  ctx.lineTo(scaledCoordinates.b.x, scaledCoordinates.b.y);
  ctx.lineTo(scaledCoordinates.c.x, scaledCoordinates.c.y);
  ctx.closePath();
  ctx.stroke();

  ctx.font = "20px sans-serif";
  ctx.fillText("A", scaledCoordinates.a.x - 7, scaledCoordinates.a.y + 20);
  ctx.fillText("B", scaledCoordinates.b.x - 7, scaledCoordinates.b.y + 20);
  ctx.fillText("C", scaledCoordinates.c.x - 7, scaledCoordinates.c.y - 10);
}

export function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}
