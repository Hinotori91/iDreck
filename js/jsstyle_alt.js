// Formeln
// -- Umfang ... U = a+b+c --
// Flächeninhalt ...  A= g.h/2
// Höhea ... ha=2*A/a
// Umkreisradius ... R=a*b*c/4*A
// Innenkreisradius ... p=a/s
// Seitenhalbierende ... sa= a+b+c/2
// Seitenhalbierende zu a ... Wurzel von (2*(b^2+c^2)-a^2)/2
// Seitenhalbierende zu b ... Wurzel von (2*(c^2+a^2)-b^2)/2
// Seitenhalbierende zu c ... Wurzel von (2*(a^2+b^2)-c^2)/2
///////////////////////////////////////////////////////////
// Selektoren aus HTML
let seiten_all = document.querySelectorAll(".seite")
let seite_a = document.querySelector("#s-a").value;
let seite_b = document.querySelector("#s-b").value;
let seite_c = document.querySelector("#s-c").value;

let winkel_all = document.querySelectorAll(".winkel");
let alpha = document.querySelector("#w-a");
let beta = document.querySelector("#w-b");
let gamma = document.querySelector("#w-c");

let ergebnis = document.querySelector("#ergebnis");
///////////////////////////////////////////////////////////
// Variablen
let a = parseInt(seite_a);
let b = parseInt(seite_b);
let c = parseInt(seite_c);

console.log("Seite A " + seite_a);
console.log("Seite B " + seite_b);
console.log("Seite C " + seite_c);

ha = 0;
hb = 0;
hc = 0;

///////////////////////////////////////////////////////////
// Funktion zum Div erstellen
const createDiv = () => {
  var div = document.createElement("div");
  var p = document.createElement("p");
  p.textContent = "blah";
  div.appendChild(p);
  document.body.appendChild(div);
}
///////////////////////////////////////////////////////////

// Umfang:
let umfang = a + b + c;

var div = document.createElement("div");
var p = document.createElement("p");
p.textContent = "Umfang = " + umfang;
div.appendChild(p);
document.body.appendChild(div);
///////////////////////////////////////////////////////////

//Cosinus alpha = (-0,5a^2 + 0,5b^2 + 0,5c^2) / b*c
let alpha_rad = Math.acos((-0.5* Math.pow(a,2) + 0.5* Math.pow(b,2) + 0.5* Math.pow(c,2)) / (b*c));

let alpha_winkel = alpha_rad * 180 / Math.PI;

var div = document.createElement("div");
var p = document.createElement("p");
p.textContent = "Winkel Alpha = " + alpha_winkel;
div.appendChild(p);
document.body.appendChild(div);

winkel_alpha = alpha_winkel;
/////////
//cosinus beta = (0,5a^2 - 0,5b^2 + 0,5c^2) / a*c
let beta_rad = Math.acos((0.5* Math.pow(a,2) - 0.5* Math.pow(b,2) + 0.5* Math.pow(c,2)) / (a*c));
let beta_winkel = beta_rad * 180 / Math.PI;

var div = document.createElement("div");
var p = document.createElement("p");
p.textContent = "Winkel Beta = " + beta_winkel;
div.appendChild(p);
document.body.appendChild(div);

/////////
//Cosinus Gamma
let winkel_gamma = -beta_winkel - alpha_winkel + 180;
console.log("Winkel Gamma = " + winkel_gamma);

let rad_gamma = winkel_gamma / (180 / Math.PI);
console.log("Rad_Gamma = " + rad_gamma);

var div = document.createElement("div");
var p = document.createElement("p");
p.textContent = "Winkel Gamma = " + winkel_gamma;
div.appendChild(p);
document.body.appendChild(div);

// Höhe berechnen mit den Seiten die angegeben sind
if (b != "" && rad_gamma != ""){
  let ha1 = b * Math.sin(rad_gamma);
  ha = ha1;
  // console.log("Höhe von a = " + ha);

  var div = document.createElement("div");
  var p = document.createElement("p");
  p.textContent = "Höhe von a = " + ha;
  div.appendChild(p);
  document.body.appendChild(div);
}else if (b != "" && alpha_rad != ""){
  let hc1 = b * Math.sin(alpha_rad);
  hc = hc1;
  // console.log("Höhe von c = " + hc);
  
  var div = document.createElement("div");
  var p = document.createElement("p");
  p.textContent = "Höhe von c = " + hc;
  div.appendChild(p);
  document.body.appendChild(div);
}else if (c != "" && alpha_rad != ""){
  let hb1 = c * Math.sin(alpha_rad);
  hb = hb1;
  // console.log("Höhe von b = " + hb);

  var div = document.createElement("div");
  var p = document.createElement("p");
  p.textContent = "Höhe von b = " + hb;
  div.appendChild(p);
  document.body.appendChild(div);
}
///////////////////////////////////////////////////////////
//Flächeninhalt ...  A= g.h/2
let flächeninhalt = 0

if (a != "" && ha != 0){
  let flächeninhalt1 = a*ha/2
  flächeninhalt = flächeninhalt1;
  // console.log("Flächeninhalt = " + flächeninhalt);

  var div = document.createElement("div");
  var p = document.createElement("p");
  p.textContent = "Flächeninhalt = " + flächeninhalt;
  div.appendChild(p);
  document.body.appendChild(div);

}else if (b != "" && hb != 0){
  let flächeninhalt1 = b*hb/2
  flächeninhalt = flächeninhalt1;
  // console.log("Flächeninhalt = " + flächeninhalt);

  var div = document.createElement("div");
  var p = document.createElement("p");
  p.textContent = "Flächeninhalt = " + flächeninhalt;
  div.appendChild(p);
  document.body.appendChild(div);
}
///////////////////////////////////////////////////////////
// Umrkreisradius berechnen
let umkreisradius = a * b * c / (4 * flächeninhalt);

var div = document.createElement("div");
var p = document.createElement("p");
p.textContent = "Umkreisradius = " + umkreisradius;
div.appendChild(p);
document.body.appendChild(div);
// console.log("umkreisradius = " + umkreisradius);
///////////////////////////////////////////////////////////
//Seitenhalbierende
let s = (a + b + c)/2;

var div = document.createElement("div");
var p = document.createElement("p");
p.textContent = "Seitenhalbierende = " + s;
div.appendChild(p);
document.body.appendChild(div);


// Seitenhalbierende zu a ... Wurzel von (2*(b^2+c^2)-a^2)/2
let sa = Math.sqrt(2*(Math.pow(b,2)+Math.pow(c,2))-Math.pow(a,2))/2;
console.log("Seitenhalbe zu a = " + sa);

var div = document.createElement("div");
  var p = document.createElement("p");
  p.textContent = "Seitenhalbe zu a = " + sa;
  div.appendChild(p);
  document.body.appendChild(div);
// Seitenhalbierende zu b ... Wurzel von (2*(c^2+a^2)-b^2)/2
let sb = Math.sqrt(2*(Math.pow(c,2)+Math.pow(a,2))-Math.pow(b,2))/2;
console.log("Seitenhalbe zu b = " + sb);

var div = document.createElement("div");
  var p = document.createElement("p");
  p.textContent = "Seitenhalbe zu b = " + sb;
  div.appendChild(p);
  document.body.appendChild(div);
// Seitenhalbierende zu c ... Wurzel von (2*(a^2+b^2)-c^2)/2
let sc = Math.sqrt(2*(Math.pow(a,2)+Math.pow(b,2))-Math.pow(c,2))/2;
console.log("Seitenhalbe zu c = " + sc);

var div = document.createElement("div");
  var p = document.createElement("p");
  p.textContent = "Seitenhalbe zu a = " + sc;
  div.appendChild(p);
  document.body.appendChild(div);
///////////////////////////////////////////////////////////
//Innenkreisradius ... p=a/s
//Innenkreisradius ... 2*flächeninhalt/umfang
// innenradius = a/sa
innenradius = 2*flächeninhalt/umfang

  var div = document.createElement("div");
  var p = document.createElement("p");
  p.textContent = "Innenkreisradius = " + innenradius;
  div.appendChild(p);
  document.body.appendChild(div);
///////////////////////////////////////////////////////////
//Seiten Berechnen wenn nicht angegeben
// Angabe (c, alpha, beta) Seite a ... (c/singamma) * sinalpha
let a_berechnen = (c/Math.sin(winkel_gamma))*Math.sin(winkel_alpha);
console.log("a berechnen = " + a_berechnen);

// Seite b ... (c/sin gamma) * sin beta