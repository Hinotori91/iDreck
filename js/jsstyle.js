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
let alpha1 = document.querySelector("#w-a").value;
let beta1 = document.querySelector("#w-b").value;
let gamma1 = document.querySelector("#w-c").value;

let ergebnis = document.querySelector("#ergebnis");

///////////////////////////////////////////////////////////
// Funktion zum Div erstellen
const createDiv = (string,text) => {
  // var div = document.createElement("div");
  var p = document.createElement("p");
  p.textContent = string + text;
  // div.appendChild(p);
  // document.body.appendChild(div);
  ergebnis.appendChild(p);
}
///////////////////////////////////////////////////////////
// Variablen
let a = 0;
let b = 0;
let c = 0;

if (seite_a!=''){
  a = parseInt(seite_a);
}
if (seite_b!=''){
  b = parseInt(seite_b);
}
if (seite_c!=''){
  c = parseInt(seite_c);
}
///////////////////////////////////////////////////////////

let alpha_winkel = 0;
let beta_winkel = 0;
let gamma_winkel = 0;

if (alpha1 !=''){
  alpha_winkel = parseInt(alpha1);
}
if (beta1 !=''){
  beta_winkel = parseInt(beta1);
}
if (gamma1 !=''){
  gamma_winkel = parseInt(gamma1);
};

console.log("Seite A " + a);
console.log("Seite B " + b);
console.log("Seite C " + c);

console.log("Alpha " + alpha_winkel);
console.log("Beta " + beta_winkel);
console.log("Gamma " + gamma_winkel);

ha = 0;
hb = 0;
hc = 0;

///////////////////////////////////////////////////////////


// //Cosinus alpha = (-0,5a^2 + 0,5b^2 + 0,5c^2) / b*c
// if(alpha_winkel==0){
//   let alpha_rad = Math.acos((-0.5* Math.pow(a,2) + 0.5* Math.pow(b,2) + 0.5* Math.pow(c,2)) / (b*c));
//   alpha_winkel = alpha_rad * 180 / Math.PI;
// }
// createDiv("Winkel Alpha = ", alpha_winkel);

// /////////
// //cosinus beta = (0,5a^2 - 0,5b^2 + 0,5c^2) / a*c
// if(beta_winkel==0){
//   let beta_rad = Math.acos((0.5* Math.pow(a,2) - 0.5* Math.pow(b,2) + 0.5* Math.pow(c,2)) / (a*c));
//   beta_winkel = beta_rad * 180 / Math.PI;
// }
// createDiv("Winkel Beta = ", beta_winkel);


// /////////
// //Cosinus Gamma
// if(gamma_winkel==0){
//   let rad_gamma = gamma_winkel / (180 / Math.PI);
//   gamma_winkel = -beta_winkel - alpha_winkel + 180;
// }
// createDiv("Winkel Gamma = ", gamma_winkel); 

//////////////////////////////////////////////////////////////////////
//Winkelberechnen mit 2 seiten und einem Winkel

// a = wurzel b^2+c^2-2bc*cos(alpha_winkel)






//////////////////////////////////////////////////////////////////////

//3 Seite keine Winkel
// Alpha = acos((a^2 - b^2 -c^2)/-2*b*c);
// Beta = acos((b^2 - a^2 - c^2)/-2*a*c);
// Gamma = acos((c^2 - b^2 - a^2)/-2*a*b);
if(a!=0 && b!=0 && c!=0){
  alpha_winkel = Math.acos(Math.pow(a,2)-Math.pow(b,2)-Math.pow(c,2)/-2*b*c);
  beta_winkel = Math.acos(Math.pow(b,2)-Math.pow(a,2)-Math.pow(c,2)/-2*a*c);
  gamma_winkel = Math.acos(Math.pow(c,2)-Math.pow(b,2)-Math.pow(a,2)/-2*a*b);
  createDiv("Winkel Alpha = ", alpha_winkel);
  createDiv("Winkel Beta = ", beta_winkel);
  createDiv("Winkel Gamma = ", gamma_winkel); 
}



//SEITE A - BERECHNEN in allen Varianten!!!
if (a==0 && b!=0 && c==0 && alpha_winkel!=0 && beta_winkel!=0 && gamma_winkel==0){
  gamma_winkel = 180-beta_winkel-alpha_winkel;
  a = b*(Math.sin(alpha_winkel/(180 / Math.PI)))/Math.sin(beta_winkel/(180 / Math.PI));
  c = a*(Math.sin(gamma_winkel/(180 / Math.PI)))/Math.sin(alpha_winkel/(180 / Math.PI));
}else if (a==0 && b!=0 && c==0 && alpha_winkel==0 && beta_winkel!=0 && gamma_winkel !=0){
  alpha_winkel = 180-beta_winkel-gamma_winkel;
  a = b*(Math.sin(alpha_winkel/(180 / Math.PI)))/Math.sin(beta_winkel/(180 / Math.PI));
  c = a*(Math.sin(gamma_winkel/(180 / Math.PI)))/Math.sin(alpha_winkel/(180 / Math.PI));
}else if (a==0 && b!=0 && c==0 && alpha_winkel!=0 && beta_winkel==0 && gamma_winkel !=0){
  beta_winkel = 180-alpha_winkel-gamma_winkel;
  a = b*(Math.sin(alpha_winkel/(180 / Math.PI)))/Math.sin(beta_winkel/(180 / Math.PI));
  c = a*(Math.sin(gamma_winkel/(180 / Math.PI)))/Math.sin(alpha_winkel/(180 / Math.PI));

}else if (a==0 && b==0 && c!=0 && alpha_winkel!=0 && beta_winkel!=0 && gamma_winkel==0){
  gamma_winkel = 180-beta_winkel-alpha_winkel;
  b = c*(Math.sin(beta_winkel/(180 / Math.PI)))/Math.sin(gamma_winkel/(180 / Math.PI));
  a = b*(Math.sin(alpha_winkel/(180 / Math.PI)))/Math.sin(beta_winkel/(180 / Math.PI));
}else if (a==0 && b==0 && c!=0 && alpha_winkel==0 && beta_winkel!=0 && gamma_winkel !=0){
  alpha_winkel = 180-beta_winkel-gamma_winkel;
  b = c*(Math.sin(beta_winkel/(180 / Math.PI)))/Math.sin(gamma_winkel/(180 / Math.PI));
  a = b*(Math.sin(alpha_winkel/(180 / Math.PI)))/Math.sin(beta_winkel/(180 / Math.PI));
}else if (a==0 && b==0 && c!=0 && alpha_winkel!=0 && beta_winkel==0 && gamma_winkel !=0){
  beta_winkel = 180-alpha_winkel-gamma_winkel;
  b = c*(Math.sin(beta_winkel/(180 / Math.PI)))/Math.sin(gamma_winkel/(180 / Math.PI));
  a = b*(Math.sin(alpha_winkel/(180 / Math.PI)))/Math.sin(beta_winkel/(180 / Math.PI));


}else if (a==0 && b!=0 && c!=0 && alpha_winkel!=0 && beta_winkel==0 && gamma_winkel == 0){
    let adoof = Math.pow(b,2)+Math.pow(c,2)-(2*b*c)*Math.cos(alpha_winkel/(180 / Math.PI));
    let awurzel = Math.sqrt(adoof);
    a = awurzel;
}else if(a==0 && b!=0 && c!=0 && alpha_winkel==0 && beta_winkel!=0 && gamma_winkel == 0){
  let gammablöd = Math.asin(c*Math.sin(beta_winkel/(180 / Math.PI))/b);
  gamma_winkel = gammablöd*(180/Math.PI);
  alpha_winkel = 180 - beta_winkel - gamma_winkel;
  let adoof = Math.pow(b,2)+Math.pow(c,2)-(2*b*c)*Math.cos(alpha_winkel/(180 / Math.PI));
  let awurzel = Math.sqrt(adoof);
  a = awurzel;
}else if(a==0 && b!=0 && c!=0 && alpha_winkel==0 && beta_winkel==0 && gamma_winkel!= 0){
  let betablöd = Math.asin(Math.sin(gamma_winkel/(180 / Math.PI))/c * b);
  beta_winkel = betablöd*(180/Math.PI);
  alpha_winkel = 180 - beta_winkel - gamma_winkel;
  let adoof = Math.pow(b,2)+Math.pow(c,2)-(2*b*c)*Math.cos(alpha_winkel/(180 / Math.PI));
  let awurzel = Math.sqrt(adoof);
  a = awurzel;
};


// SEITE B BERECHNEN in allen VARIANTEN!!
if(a!=0 && b==0 && c==0 && alpha_winkel!=0 && beta_winkel!=0 && gamma_winkel ==0){
  gamma_winkel = 180 - beta_winkel - alpha_winkel;
  c = a*(Math.sin(gamma_winkel/(180 / Math.PI)))/Math.sin(alpha_winkel/(180 / Math.PI));
  b = c*(Math.sin(beta_winkel/(180 / Math.PI)))/Math.sin(gamma_winkel/(180 / Math.PI));
}else if (a!=0 && b==0 && c==0 && alpha_winkel==0 && beta_winkel!=0 && gamma_winkel !=0){
  alpha_winkel = 180-beta_winkel-gamma_winkel;
  c = a*(Math.sin(gamma_winkel/(180 / Math.PI)))/Math.sin(alpha_winkel/(180 / Math.PI));
  b = c*(Math.sin(beta_winkel/(180 / Math.PI)))/Math.sin(gamma_winkel/(180 / Math.PI));
}else if (a!=0 && b==0 && c==0 && alpha_winkel!=0 && beta_winkel==0 && gamma_winkel !=0){
  beta_winkel = 180-alpha_winkel-gamma_winkel;
  c = a*(Math.sin(gamma_winkel/(180 / Math.PI)))/Math.sin(alpha_winkel/(180 / Math.PI));
  b = c*(Math.sin(beta_winkel/(180 / Math.PI)))/Math.sin(gamma_winkel/(180 / Math.PI));

}if(a==0 && b==0 && c!=0 && alpha_winkel!=0 && beta_winkel!=0 && gamma_winkel ==0){
  gamma_winkel = 180 - beta_winkel - alpha_winkel;
  b = c*(Math.sin(beta_winkel/(180 / Math.PI)))/Math.sin(gamma_winkel/(180 / Math.PI));
  a = b*(Math.sin(alpha_winkel/(180 / Math.PI)))/Math.sin(beta_winkel/(180 / Math.PI));
}else if (a==0 && b==0 && c!=0 && alpha_winkel==0 && beta_winkel!=0 && gamma_winkel !=0){
  alpha_winkel = 180-beta_winkel-gamma_winkel;
  b = c*(Math.sin(beta_winkel/(180 / Math.PI)))/Math.sin(gamma_winkel/(180 / Math.PI));
  a = b*(Math.sin(alpha_winkel/(180 / Math.PI)))/Math.sin(beta_winkel/(180 / Math.PI));
}else if (a==0 && b==0 && c!=0 && alpha_winkel!=0 && beta_winkel==0 && gamma_winkel !=0){
  beta_winkel = 180-alpha_winkel-gamma_winkel;
  b = c*(Math.sin(beta_winkel/(180 / Math.PI)))/Math.sin(gamma_winkel/(180 / Math.PI));
  a = b*(Math.sin(alpha_winkel/(180 / Math.PI)))/Math.sin(beta_winkel/(180 / Math.PI));

// }else if (a!=0 && b==0 && c!=0 && alpha_winkel!=0 && beta_winkel==0 && gamma_winkel == 0){
//   let adoof = Math.pow(b,2)+Math.pow(c,2)-(2*b*c)*Math.cos(alpha_winkel/(180 / Math.PI));
//   let awurzel = Math.sqrt(adoof);
//   a = awurzel;
// }else if(a!=0 && b==0 && c!=0 && alpha_winkel==0 && beta_winkel!=0 && gamma_winkel == 0){
// let gammablöd = Math.asin(c*Math.sin(beta_winkel/(180 / Math.PI))/b);
// gamma_winkel = gammablöd*(180/Math.PI);
// alpha_winkel = 180 - beta_winkel - gamma_winkel;
// let adoof = Math.pow(b,2)+Math.pow(c,2)-(2*b*c)*Math.cos(alpha_winkel/(180 / Math.PI));
// let awurzel = Math.sqrt(adoof);
// a = awurzel;
// }else if(a!=0 && b==0 && c!=0 && alpha_winkel==0 && beta_winkel==0 && gamma_winkel!= 0){
// let betablöd = Math.asin(Math.sin(gamma_winkel/(180 / Math.PI))/c * b);
// beta_winkel = betablöd*(180/Math.PI);
// alpha_winkel = 180 - beta_winkel - gamma_winkel;
// let adoof = Math.pow(b,2)+Math.pow(c,2)-(2*b*c)*Math.cos(alpha_winkel/(180 / Math.PI));
// let awurzel = Math.sqrt(adoof);
// a = awurzel;
};


// SEITE C BERECHNEN in allen VARIANTEN!!
if(a==0 && b!=0 && c==0 && alpha_winkel!=0 && beta_winkel!=0 && gamma_winkel ==0){
  gamma_winkel = 180 - beta_winkel - alpha_winkel;
  a = b*(Math.sin(alpha_winkel/(180 / Math.PI)))/Math.sin(beta_winkel/(180 / Math.PI));
  c = a*(Math.sin(gamma_winkel/(180 / Math.PI)))/Math.sin(alpha_winkel/(180 / Math.PI));
}else if (a==0 && b!=0 && c==0 && alpha_winkel==0 && beta_winkel!=0 && gamma_winkel !=0){
  alpha_winkel = 180-beta_winkel-gamma_winkel;
  a = b*(Math.sin(alpha_winkel/(180 / Math.PI)))/Math.sin(beta_winkel/(180 / Math.PI));
  c = a*(Math.sin(gamma_winkel/(180 / Math.PI)))/Math.sin(alpha_winkel/(180 / Math.PI));
}else if (a==0 && b!=0 && c==0 && alpha_winkel!=0 && beta_winkel==0 && gamma_winkel !=0){
  beta_winkel = 180-alpha_winkel-gamma_winkel;
  a = b*(Math.sin(alpha_winkel/(180 / Math.PI)))/Math.sin(beta_winkel/(180 / Math.PI));
  c = a*(Math.sin(gamma_winkel/(180 / Math.PI)))/Math.sin(alpha_winkel/(180 / Math.PI));

}if(a!=0 && b==0 && c==0 && alpha_winkel!=0 && beta_winkel!=0 && gamma_winkel ==0){
  gamma_winkel = 180 - beta_winkel - alpha_winkel;
  b = c*(Math.sin(beta_winkel/(180 / Math.PI)))/Math.sin(gamma_winkel/(180 / Math.PI));
  a = b*(Math.sin(alpha_winkel/(180 / Math.PI)))/Math.sin(beta_winkel/(180 / Math.PI));
}else if (a!=0 && b==0 && c==0 && alpha_winkel==0 && beta_winkel!=0 && gamma_winkel !=0){
  alpha_winkel = 180-beta_winkel-gamma_winkel;
  b = c*(Math.sin(beta_winkel/(180 / Math.PI)))/Math.sin(gamma_winkel/(180 / Math.PI));
  a = b*(Math.sin(alpha_winkel/(180 / Math.PI)))/Math.sin(beta_winkel/(180 / Math.PI));
}else if (a!=0 && b==0 && c==0 && alpha_winkel!=0 && beta_winkel==0 && gamma_winkel !=0){
  beta_winkel = 180-alpha_winkel-gamma_winkel;
  b = c*(Math.sin(beta_winkel/(180 / Math.PI)))/Math.sin(gamma_winkel/(180 / Math.PI));
  a = b*(Math.sin(alpha_winkel/(180 / Math.PI)))/Math.sin(beta_winkel/(180 / Math.PI));

// }else if (a!=0 && b!=0 && c==0 && alpha_winkel!=0 && beta_winkel==0 && gamma_winkel == 0){
//   let adoof = Math.pow(b,2)+Math.pow(a,2)-(2*b*a)*Math.cos(alpha_winkel/(180 / Math.PI));
//   let awurzel = Math.sqrt(adoof);
//   a = awurzel;
// }else if(a!=0 && b!=0 && c==0 && alpha_winkel==0 && beta_winkel!=0 && gamma_winkel == 0){
// let gammablöd = Math.asin(c*Math.sin(beta_winkel/(180 / Math.PI))/b);
// gamma_winkel = gammablöd*(180/Math.PI);
// alpha_winkel = 180 - beta_winkel - gamma_winkel;
// let adoof = Math.pow(b,2)+Math.pow(a,2)-(2*b*a)*Math.cos(alpha_winkel/(180 / Math.PI));
// let awurzel = Math.sqrt(adoof);
// a = awurzel;
// }else if(a!=0 && b!=0 && c==0 && alpha_winkel==0 && beta_winkel==0 && gamma_winkel!= 0){
// let betablöd = Math.asin(Math.sin(gamma_winkel/(180 / Math.PI))/c * b);
// beta_winkel = betablöd*(180/Math.PI);
// alpha_winkel = 180 - beta_winkel - gamma_winkel;
// let adoof = Math.pow(b,2)+Math.pow(c,2)-(2*b*c)*Math.cos(alpha_winkel/(180 / Math.PI));
// let awurzel = Math.sqrt(adoof);
// a = awurzel;
};


createDiv("Seite a = ", a);
createDiv("Seite b = ", b);
createDiv("Seite c = ", c);


///////////////////////////////////////////////////////////

// Umfang:
let umfang = a + b + c;
createDiv("Umfang = ", umfang);

///////////////////////////////////////////////////////////
// Höhe berechnen mit den Seiten die angegeben sind
// if (b != "" && rad_gamma != ""){
//   let ha1 = b * Math.sin(rad_gamma);

if (b != "" && gamma_winkel != ""){
  let ha1 = b * Math.sin(gamma_winkel/(180 / Math.PI));
  ha = ha1;
  createDiv("Höhe von a = ", ha);
};
// if (b != "" && alpha_rad != ""){
//   let hc1 = a * Math.sin(alpha_rad);
if (b != "" && alpha_winkel != ""){
  let hc1 = b * Math.sin(alpha_winkel/(180 / Math.PI));
  hc = hc1;
  createDiv("Höhe von c = ", hc);
};
// if (c != "" && alpha_rad != ""){
//   let hb1 = c * Math.sin(alpha_rad);
if (c != "" && alpha_winkel != ""){
  let hb1 = c * Math.sin(alpha_winkel/(180 / Math.PI));
  hb = hb1;
  createDiv("Höhe von b = ", hb);
};

/////////////////////////////////////////////////////////
// Flächeninhalt ...  A= g.h/2

let flächeninhalt = 0

if (a != 0 && ha != 0){
  flächeninhalt = a*ha/2;
  createDiv("Flächeninhalt = ", flächeninhalt);
}else if (b != 0 && hb != 0){
  flächeninhalt = b*hb/2;
  createDiv("Flächeninhalt = ", flächeninhalt);
}else if (c!= 0 && hc != 0){
  flächeninhalt = c*hc/2;
  createDiv("Flächeninhalt = ", flächeninhalt);
}

///////////////////////////////////////////////////////////
// Umrkreisradius berechnen

let umkreisradius = a * b * c / (4 * flächeninhalt);
createDiv("Umkreisradius = ", umkreisradius);

// console.log("umkreisradius = " + umkreisradius);
///////////////////////////////////////////////////////////
//Seitenhalbierende

let s = (a + b + c)/2;
createDiv("Seitenhalbierende = ", s);

// Seitenhalbierende zu a ... Wurzel von (2*(b^2+c^2)-a^2)/2
let sa = Math.sqrt(2*(Math.pow(b,2)+Math.pow(c,2))-Math.pow(a,2))/2;
createDiv("Seitenhalbe zu a = ", sa); 

// Seitenhalbierende zu b ... Wurzel von (2*(c^2+a^2)-b^2)/2
let sb = Math.sqrt(2*(Math.pow(c,2)+Math.pow(a,2))-Math.pow(b,2))/2;
createDiv("Seitenhalbe zu b = ", sb);

// Seitenhalbierende zu c ... Wurzel von (2*(a^2+b^2)-c^2)/2
let sc = Math.sqrt(2*(Math.pow(a,2)+Math.pow(b,2))-Math.pow(c,2))/2;
createDiv("Seitenhalbe zu c = ", sc);

///////////////////////////////////////////////////////////
//Innenkreisradius ... p=a/s
//Innenkreisradius ... 2*flächeninhalt/umfang
// innenradius = a/sa
innenradius = 2*flächeninhalt/umfang
createDiv("Innenkreisradius = ", innenradius);
///////////////////////////////////////////////////////////