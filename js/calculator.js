//// SSS - SATZ ////
export function sss_Umfang (a,b,c){
  umfang = a+b+c;
  ausgabe_umfang.textContent = "U = "+umfang+"cm";
}

// v = Values-Objekt from 'dreieck_logik.js'
export function sss_Winkel_berechnen (v){
  console.debug('sss_Winkel berechnen');
  v.alpha_rad = Math.acos((-0.5* Math.pow(v.a,2) + 0.5* Math.pow(v.b,2) + 0.5* Math.pow(v.c,2)) / (v.b*v.c));
  v.alpha_winkel = v.alpha_rad * 180 / Math.PI;
  
  v.beta_rad = Math.acos((0.5* Math.pow(v.a,2) - 0.5* Math.pow(v.b,2) + 0.5* Math.pow(v.c,2)) / (v.a*v.c));
  v.beta_winkel = v.beta_rad * 180 / Math.PI;

  // ÜBERARBEITUNG NÖTIG!!! NICHT RICHTIG GLAUBE ICH!!!
  // gamma_winkel = Math.acos(Math.pow(c,2)-Math.pow(b,2)-Math.pow(a,2)/-2*a*b);
  v.gamma_winkel = -v.beta_winkel-v.alpha_winkel+180;
  v.gamma_rad = v.gamma_winkel/180*Math.PI;
}


//// SWW - SATZ ////
export function sww_seite_berechnen (){
  console.debug('sww_seite_berechnen');
  b = (a/sin(alpha_rad))*sin(beta_rad);
  c = (a/sin(alpha_rad))*sin(gamma_rad);
}

export function sww_Winkel_berechnen (){
}


//// SSW - SATZ ////
export function ssw_Winkel_berechnen (){
}

export function ssw_Seite_berechnen (v){
  console.debug('ssw_Seite_berechnen');
  console.log(v.alpha_winkel);
  if(v.alpha_winkel && v.alpha_winkel!=""){
    v.alpha_rad = calc_rad_from_angle(v.alpha_winkel);
    v.a = seite_berechnen(v.b, v.c, v.alpha_rad)
  }else if(v.beta_winkel && v.beta_winkel!=""){
    v.beta_rad = calc_rad_from_angle(v.beta_winkel);
    v.b = seite_berechnen(v.a, v.c, v.beta_rad); 
  }else if(v.gamma_winkel && v.gamma_winkel!=""){
    v.gamma_rad = calc_rad_from_angle(v.gamma_winkel);
    v.c = seite_berechnen(v.a,v.b,v.gamma_rad);
  }
}

export function flächeninhalt(v){
  console.debug('flächeninhalt');
  if(v.a!=""){
    flächeninhalt = v.a*Math.sin(v.beta_rad);
  }else if(v.b!=""){
    flächeninhalt = v.b*Math.sin(v.alpha_rad);
  }else if(v.a!="" && v.b!=""){
    flächeninhalt = v.a*Math.sin(v.beta_rad);
  }
}

export function seiten_höhe (a,b,alpha_rad,beta_rad){
  console.debug('seiten_höhe');
  if(a!=""){
    höhe_C = a*Math.sin(beta_rad);
    ausgabe_Seitenhalbe_C.textContent = "hc = "+höhe_C;
  }else if(b!=""){
    höhe_C = b*Math.sin(alpha_rad);
    ausgabe_Seitenhalbe_C.textContent = "hc = "+höhe_C;
  }else if(a!="" && b!=""){
    höhe_C = a*Math.sin(beta_rad);
    ausgabe_Seitenhalbe_C.textContent = "hc = "+höhe_C;
  }
}


function seite_berechnen (seite1, seite2, rad){
  return Math.sqrt(Math.pow(seite1,2) + Math.pow(seite2,2) - 2*seite1*seite2 * Math.cos(rad));
}
function calc_rad_from_angle (winkel){
  return winkel / 180 * Math.PI;
}