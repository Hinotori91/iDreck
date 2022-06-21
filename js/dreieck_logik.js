import * as calc from './calculator.js';
///////////////////////////////////////////////////////////
let seiten_all = document.querySelectorAll(".seite")
let seite_a = document.querySelector("#s-a");
let seite_b = document.querySelector("#s-b");
let seite_c = document.querySelector("#s-c");

let winkel_all = document.querySelectorAll(".winkel");
let alpha1 = document.querySelector("#w-a");
let beta1 = document.querySelector("#w-b");
let gamma1 = document.querySelector("#w-c");

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

let error = document.querySelector("#error");

///////////////////////////////////////////////////////////

let values = {};



// Main
button.addEventListener('click', ()=>{
  parse_inputs();
  if(inputs_are_valid()){
    console.debug('inputs were valid');
    hide_error_message();
    fill_inputs();

    calc.umfang(values);
    calc.flächeninhalt(values);
    // Umkreisradius
    // Inkreisradius
    // Seitenhalbierende a
    // Seitenhalbierende b
    // Seitenhalbierende c
    output_results()
  }else{
    console.debug('inputs invalid');
    show_error_message();
  }
});

//Funktionen
function parse_inputs (){
  values = {
    value_count : 0,
    side_count : 0
  };

  if (seite_a.value!=''){
    values.a = parseFloat(seite_a.value);
    values.side_count++;
    values.value_count++;
  }
  if (seite_b.value!=''){
    values.b = parseFloat(seite_b.value);
    values.side_count++;
    values.value_count++;
  }
  if (seite_c.value!=''){
    values.c = parseFloat(seite_c.value);
    values.side_count++;
    values.value_count++;
  }

  if (alpha1.value !=''){
    values.alpha_winkel = parseFloat(alpha1.value);
    values.value_count++;
  }
  if (beta1.value !=''){
    values.beta_winkel = parseFloat(beta1.value);
    values.value_count++;
  }
  if (gamma1.value !=''){
    values.gamma_winkel = parseFloat(gamma1.value);
    values.value_count++;
  };
}

function inputs_are_valid() {
  if(values.value_count != 3) return false;
  if(values.side_count == 0) return false;
  if(values.side_count == 3) return true;
  if(values.side_count == 2)
    return values.a != "" && values.b != "" && values.gamma_winkel
        || values.b != "" && values.c != "" && values.alpha_winkel
        || values.c != "" && values.a != "" && values.beta_winkel
  return true;  
}

function fill_inputs() {
  switch (values.side_count) {
    case 3:
      console.debug('switch case 3');
      calc.sss_Winkel_berechnen(values);
      break;
    case 2:
      console.debug('switch case 2');
      calc.ssw_Seite_berechnen(values);
      break;
    case 1:
      console.debug('switch case 1');
      calc.sww_Winkel_berechnen(values);
      calc.sww_seite_berechnen(values);
      break;
  }
}

function output_results () {
  ausgabe_a.textContent = values.a;
  ausgabe_b.textContent = values.b;
  ausgabe_c.textContent = values.c;

  ausgabe_alpha.textContent = "α "+ values.alpha_winkel.toFixed(3)+"°"
  ausgabe_beta.textContent = "β "+ values.beta_winkel.toFixed(3)+"°"
  ausgabe_gamma.textContent = "γ "+ values.gamma_winkel.toFixed(3)+"°"

  ausgabe_bogenmaß_alpha.textContent = values.alpha_rad.toFixed(3);
  ausgabe_bogenmaß_beta.textContent = values.beta_rad.toFixed(3);
  ausgabe_bogenmaß_gamma.textContent = values.gamma_rad.toFixed(3);

  ausgabe_umfang.textContent = values.umfang.toFixed(3);
  ausgabe_flächeninhalt.textContent = values.flächeninhalt.toFixed(3);

  ausgabe_Seitenhalbe_C.textContent = values.hoehe_C;
}

function hide_error_message () {
  document.getElementById("error").style.display="none";
}

function show_error_message () {
  document.getElementById("error").style.display="block";
}







  








// A=1/2a*ha
// A=1/2b*hb
// A=1/2c*hc

// Höhe a (ha)
// Höhe b (hb)
// Höhe c (hc)

// Umkreisradius
// Inkreisradius
// Seitenhalbierende a (sa)
// Seitenhalbierende b (sb)
// Seitenhalbierende c (sc)
// Winkel alpha
// Winkel beta
// Winkel gamma
