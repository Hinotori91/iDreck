import * as calc from './calculator.js';
import * as draw from './dreieck.js';
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
let ausgabe_umkreisradius = document.querySelector("#ausgabeUmkreisradius");
let ausgabe_inkreisradius = document.querySelector("#ausgabeInkreisradius");

let ausgabe_Seitenhalbe_A = document.querySelector("#ausgabeSeitenhalbeA");
let ausgabe_Seitenhalbe_B = document.querySelector("#ausgabeSeitenhalbeB");
let ausgabe_Seitenhalbe_C = document.querySelector("#ausgabeSeitenhalbeC");

let error = document.querySelector("#error");
let error_triangle = document.querySelector("#error-triangle");

let round_number = document.querySelector("#rundungsfeld");

let error_border = [...document.querySelectorAll(".show-error")];

///////////////////////////////////////////////////////////
// let rundungszahl = 3;
let values = {};



// Main
button.addEventListener('click', ()=>{
  draw.clearCanvas();
  parse_inputs();
  if(inputs_are_valid()){
    hide_error_message();
    console.debug('inputs were valid');
    if(triangle_are_valid()){
      console.debug('input triangle were valid');
      hide_error_message_triangle();
      
      fill_inputs();
      calc.umfang(values);
      calc.flächeninhalt(values);
      calc.umkreisradius(values);
      calc.inkreisradius(values);
      calc.seiten_höhe_A(values);
      calc.seiten_höhe_B(values);
      calc.seiten_höhe_C(values);
      output_results()
    }else{
      console.debug('inputs triangle invalid');
      show_error_message_triangle();
    }
  }else{
    console.debug('inputs invalid');
    show_error_message();
  }
  // Dreieck Zeichnen von dreieck.js
  draw.draw(values);
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

function triangle_are_valid() {
  if(values.a + values.b < values.c) return false;
  if(values.a + values.c < values.b) return false;
  if(values.b + values.c < values.a) return false;
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
  let rundungszahl = round_number.value;
  ausgabe_a.textContent = values.a.toFixed(rundungszahl);
  ausgabe_b.textContent = values.b.toFixed(rundungszahl);
  ausgabe_c.textContent = values.c.toFixed(rundungszahl);

  ausgabe_alpha.textContent = values.alpha_winkel.toFixed(rundungszahl);
  ausgabe_beta.textContent = values.beta_winkel.toFixed(rundungszahl);
  ausgabe_gamma.textContent = values.gamma_winkel.toFixed(rundungszahl);

  ausgabe_bogenmaß_alpha.textContent = values.alpha_rad.toFixed(rundungszahl);
  ausgabe_bogenmaß_beta.textContent = values.beta_rad.toFixed(rundungszahl);
  ausgabe_bogenmaß_gamma.textContent = values.gamma_rad.toFixed(rundungszahl);

  ausgabe_umfang.textContent = values.umfang.toFixed(rundungszahl);
  ausgabe_flächeninhalt.textContent = values.flächeninhalt.toFixed(rundungszahl);
  ausgabe_umkreisradius.textContent = values.umkreisradius.toFixed(rundungszahl);
  ausgabe_inkreisradius.textContent = values.inkreisradius.toFixed(rundungszahl);

  ausgabe_Seitenhalbe_A.textContent = values.hoehe_A.toFixed(rundungszahl);
  ausgabe_Seitenhalbe_B.textContent = values.hoehe_B.toFixed(rundungszahl);
  ausgabe_Seitenhalbe_C.textContent = values.hoehe_C.toFixed(rundungszahl);
}

function hide_error_message () {
  document.getElementById("error").style.display="none";
  
  error_border.forEach(element => {
    element.style.border = "none";
  });
}

function show_error_message () {
  document.getElementById("error").style.display="block";
  error_border.forEach(element => {
    element.style.borderColor = "red";
  });
}

function hide_error_message_triangle (){
  document.getElementById("error-triangle").style.display="none";
}

function show_error_message_triangle (){
  document.getElementById("error-triangle").style.display = "block";
  error_border.forEach(element => {
    element.style.borderColor = "red";
  });
}