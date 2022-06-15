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

let ausgabe_umfang = document.querySelector("#ausgabeUmfang");
let ausgabe_flächeninhalt = document.querySelector("#ausgabeFläche");
let ausgabe_Seitenhalbe_C = document.querySelector("#ausgabeSeitenhalbeC");

//////////////////////////////////////////////////////////

// Variablen Seiten
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
// Variablen Winkel

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

ausgabe_a.textContent = "Seite A = " + a;
ausgabe_b.textContent = "Seite B = " + b;
ausgabe_c.textContent = "Seite C = " + c;

console.log("Alpha " + alpha_winkel);
console.log("Beta " + beta_winkel);
console.log("Gamma " + gamma_winkel);

ha = 0;
hb = 0;
hc = 0;

///////////////////////////////////////////////////////////

// Main
button.addEventListener('click', ()=>{
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
  
  ausgabe_alpha.textContent = "α "+ alpha_winkel+"°"
  ausgabe_beta.textContent = "β "+ beta_winkel+"°"
  ausgabe_gamma.textContent = "γ "+ gamma_winkel+"°"
}

// function winkelAlpha (){

// }
// function winkelBeta(){

// }
// function winkelGamma(){

// }

function flächeninhalt(a,b,alpha_rad,beta_rad){
  if(a!=""){
    flächeninhalt = a*Math.sin(beta_rad);
    ausgabe_flächeninhalt.textContent = "A = "+flächeninhalt;
  }else if(b!=""){
    flächeninhalt = b*Math.sin(alpha_rad);
  }else if(a!="" && b!=""){
    flächeninhalt = a*Math.sin(beta_rad);
    ausgabe_flächeninhalt.textContent = "A = "+flächeninhalt;
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
    höhe_C = a*sin(beta_rad);
    ausgabe_Seitenhalbe_C.textContent = "hc = "+höhe_C;
  }else if(b!=""){
    höhe_C = b*sin(alpha_rad);
    ausgabe_Seitenhalbe_C.textContent = "hc = "+höhe_C;
  }else if(a!="" && b!=""){
    höhe_C = a*sin(beta_rad);
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