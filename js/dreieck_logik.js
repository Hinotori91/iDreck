let seiten_all = document.querySelectorAll(".seite")
let seite_a = document.querySelector("#s-a").value;
let seite_b = document.querySelector("#s-b").value;
let seite_c = document.querySelector("#s-c").value;

let winkel_all = document.querySelectorAll(".winkel");
let alpha1 = document.querySelector("#w-a").value;
let beta1 = document.querySelector("#w-b").value;
let gamma1 = document.querySelector("#w-c").value;

let ergebnis = document.querySelector("#ergebnis");

let button = document.querySelector("#bttn");

let ausgabe_a = document.querySelector("#ausgabea");
let ausgabe_b = document.querySelector("#ausgabeb");
let ausgabe_c = document.querySelector("#ausgabec");

let ausgabe_alpha = document.querySelector("#ausgabeAlpha");
let ausgabe_beta = document.querySelector("#ausgabeBeta");
let ausgabe_gamma = document.querySelector("#ausgabeGamma");

let ausgabe_bogenmaß_alpha = document.querySelector("#ausgabeBogenmaßAlpha");
let ausgabe_bogenmaß_beta = document.querySelector("#ausgabeBogenmaßBeta");
let ausgabe_bogenmaß_gamma = document.querySelector("#ausgabeBogenmaßGamma");

let ausgabe_umfang = document.querySelector("#ausgabeUmfang");
let ausgabe_flächeninhalt = document.querySelector("#ausgabeFläche");
let ausgabe_Seitenhalbe_C = document.querySelector("#ausgabeSeitenhalbeC");

//////////////////////////////////////////////////////////

// Variablen Seiten
let a = 0;
let b = 0;
let c = 0;

if (seite_a!=''){
  a = parseFloat(seite_a);
}
if (seite_b!=''){
  b = parseFloat(seite_b);
}
if (seite_c!=''){
  c = parseFloat(seite_c);
}
// Variablen Winkel

let alpha_winkel = 0;
let beta_winkel = 0;
let gamma_winkel = 0;

if (alpha1 !=''){
  alpha_winkel = parseFloat(alpha1);
}
if (beta1 !=''){
  beta_winkel = parseFloat(beta1);
}
if (gamma1 !=''){
  gamma_winkel = parseFloat(gamma1);
};

let alpha_rad = 0;
let beta_rad = 0;
let gamma_rad = 0;

ausgabe_a.textContent = "Seite A = " + a;
ausgabe_b.textContent = "Seite B = " + b;
ausgabe_c.textContent = "Seite C = " + c;

ausgabe_alpha.textContent = alpha_winkel + "°";
ausgabe_beta.textContent = beta_winkel + "°";
ausgabe_gamma.textContent = gamma_winkel + "°";

ausgabe_bogenmaß_alpha.textContent = alpha_rad;
ausgabe_bogenmaß_beta.textContent = beta_rad;
ausgabe_bogenmaß_gamma.textContent = gamma_rad;

// console.log("Alpha " + alpha_winkel);
// console.log("Beta " + beta_winkel);
// console.log("Gamma " + gamma_winkel);

ha = 0;
hb = 0;
hc = 0;

///////////////////////////////////////////////////////////

// Main
button.addEventListener('click', ()=>{
  
  // Parsing

  // Calculator Methoden


  //// SEITEN BERECHNEN ////
  ssw_Seite_berechnen(a,b,c,alpha_winkel,beta_winkel,gamma_winkel);

  if(a!="" && b!="" && c!=""){
    sss_Umfang(a,b,c);
    sss_Winkel_berechnen(a,b,c);
  }
  flächeninhalt(a,b,alpha_rad,beta_rad);
  seiten_höhe(a,b,alpha_rad,beta_rad);

});

//Funktionen

function sss_Umfang (a,b,c){
  umfang = a+b+c;
  ausgabe_umfang.textContent = "U = "+umfang+"cm";
}

function sss_Winkel_berechnen (a,b,c){
  alpha_rad = Math.acos((-0.5* Math.pow(a,2) + 0.5* Math.pow(b,2) + 0.5* Math.pow(c,2)) / (b*c));
  alpha_winkel = alpha_rad * 180 / Math.PI;
  
  beta_rad = Math.acos((0.5* Math.pow(a,2) - 0.5* Math.pow(b,2) + 0.5* Math.pow(c,2)) / (a*c));
  beta_winkel = beta_rad * 180 / Math.PI;

  // ÜBERARBEITUNG NÖTIG!!! NICHT RICHTIG GLAUBE ICH!!!
  // gamma_winkel = Math.acos(Math.pow(c,2)-Math.pow(b,2)-Math.pow(a,2)/-2*a*b);
  gamma_winkel = -beta_winkel-alpha_winkel+180;
  gamma_rad = gamma_winkel/180*Math.PI;
  
  ausgabe_alpha.textContent = "α "+ alpha_winkel+"°"
  ausgabe_beta.textContent = "β "+ beta_winkel+"°"
  ausgabe_gamma.textContent = "γ "+ gamma_winkel+"°"

  ausgabe_bogenmaß_alpha.textContent = alpha_rad;
  ausgabe_bogenmaß_beta.textContent = beta_rad;
  ausgabe_bogenmaß_gamma.textContent = gamma_rad;
}

function ssw_Winkel_berechnen (){

}

function wws_Winkel_berechnen (){

}

function flächeninhalt(a,b,alpha_rad,beta_rad){
  if(a!=""){
    flächeninhalt = a*Math.sin(beta_rad);
    ausgabe_flächeninhalt.textContent = "A = "+flächeninhalt.toFixed(2);
  }else if(b!=""){
    flächeninhalt = b*Math.sin(alpha_rad);
    ausgabe_flächeninhalt.textContent = "A = "+flächeninhalt.toFixed(2);
  }else if(a!="" && b!=""){
    flächeninhalt = a*Math.sin(beta_rad);
    ausgabe_flächeninhalt.textContent = "A = "+flächeninhalt.toFixed(2);
  };
// A=1/2a*ha
// A=1/2b*hb
// A=1/2c*hc
}

// Höhe a (ha)
// Höhe b (hb)
// Höhe c (hc)
function seiten_höhe (a,b,alpha_rad,beta_rad){
  if(a!=""){
    höhe_C = a*Math.sin(beta_rad);
    ausgabe_Seitenhalbe_C.textContent = "hc = "+höhe_C;
  }else if(b!=""){
    höhe_C = b*Math.sin(alpha_rad);
    ausgabe_Seitenhalbe_C.textContent = "hc = "+höhe_C;
  }else if(a!="" && b!=""){
    höhe_C = a*Math.sin(beta_rad);
    ausgabe_Seitenhalbe_C.textContent = "hc = "+höhe_C;
  };
}

// Umkreisradius
// Inkreisradius
// Seitenhalbierende a (sa)
// Seitenhalbierende b (sb)
// Seitenhalbierende c (sc)
// Winkel alpha
// Winkel beta
// Winkel gamma

function ssw_Seite_berechnen (a,b,c,alpha_winkel,beta_winkel,gamma_winkel){
  
  if(b!="" && c!="" && alpha_winkel!=""){
    alpha_rad = alpha_winkel / 180 * Math.PI;
    a = Math.sqrt(Math.pow(b,2) + Math.pow(c,2) - 2*b*c * Math.cos(alpha_rad));
    ausgabe_a.textContent = a;
    ausgabe_bogenmaß_alpha.textContent = alpha_rad;
  }else if(a!="" && c!="" && beta_winkel!=""){
    beta_rad = beta_winkel /180 * Math.PI;
  
    b = Math.sqrt(Math.pow(a,2) - 2*a*c*Math.cos(beta_rad) + Math.pow(c,2));

    ausgabe_b.textContent = b.toFixed(2);
    ausgabe_bogenmaß_beta.textContent = beta_rad.toFixed(2);
  }else if(a!="" && b!="" && gamma_winkel!=""){
    gamma_rad = gamma_winkel / 180 * Math.PI;
    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2) - 2*a*b * Math.cos(gamma_rad));
    ausgabe_c.textContent = c;
    ausgabe_bogenmaß_gamma.textContent = gamma_rad;
  }
}
function seite_berechnen (seite1, seite2, rad){
    return Math.sqrt(Math.pow(seite1,2) + Math.pow(seite2,2) - 2*seite1*seite2 * Math.cos(rad));
}
function calcRad (winkel){
  return winkel / 180 * Math.PI;
}