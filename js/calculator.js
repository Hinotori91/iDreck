//// SSS - SATZ ////
// v = Values-Objekt from 'dreieck_logik.js'
export function sss_Winkel_berechnen(v) {
  console.debug('sss_Winkel berechnen');
  v.alpha_rad = Math.acos((-0.5 * Math.pow(v.a, 2)
    + 0.5 * Math.pow(v.b, 2) + 0.5 * Math.pow(v.c, 2)) / (v.b * v.c));
  v.alpha_winkel = v.alpha_rad * 180 / Math.PI;

  v.beta_rad = Math.acos((0.5 * Math.pow(v.a, 2)
    - 0.5 * Math.pow(v.b, 2) + 0.5 * Math.pow(v.c, 2)) / (v.a * v.c));
  v.beta_winkel = v.beta_rad * 180 / Math.PI;

  v.gamma_winkel = -v.beta_winkel - v.alpha_winkel + 180;
  v.gamma_rad = v.gamma_winkel / 180 * Math.PI;
}


//// SWW - SATZ ////
// https://www.matheretter.de/wiki/dreieck-berechnen-awawb
export function sww_seite_berechnen(v) {
  console.debug('sww_seite_berechnen');
  if (v.a && v.a != "") {
    v.b = (v.a / Math.sin(v.alpha_rad)) * Math.sin(v.beta_rad);
    v.c = (v.a / Math.sin(v.alpha_rad)) * Math.sin(v.gamma_rad);
  } else if (v.b && v.b != "") {
    v.a = (v.b / Math.sin(v.beta_rad) * Math.sin(v.alpha_rad));
    v.c = (v.b / Math.sin(v.beta_rad)) * Math.sin(v.gamma_rad);
  } else if (v.c && v.c != "") {
    v.a = (v.c / Math.sin(v.gamma_rad) * Math.sin(v.alpha_rad));
    v.b = (v.c / Math.sin(v.gamma_rad) * Math.sin(v.beta_rad));
  }
}

export function sww_Winkel_berechnen(v) {
  if ((v.alpha_winkel && v.alpha_winkel != "") &&
    (v.beta_winkel && v.beta_winkel != "")) {
    v.gamma_winkel = 180 - v.alpha_winkel - v.beta_winkel;
    v.gamma_rad = calc_rad_from_angle(v.gamma_winkel);
    v.alpha_rad = calc_rad_from_angle(v.alpha_winkel);
    v.beta_rad = calc_rad_from_angle(v.beta_winkel);
  } else if ((v.alpha_winkel && v.alpha_winkel != "") &&
    (v.gamma_winkel && v.gamma_winkel != "")) {
    v.beta_winkel = 180 - v.alpha_winkel - v.gamma_winkel;
    v.beta_rad = calc_rad_from_angle(v.beta_winkel);
    v.alpha_rad = calc_rad_from_angle(v.alpha_winkel);
    v.gamma_rad = calc_rad_from_angle(v.gamma_winkel);
  } else if ((v.beta_winkel && v.beta_winkel != "") &&
    (v.gamma_winkel && v.gamma_winkel != "")) {
    v.alpha_winkel = 180 - v.beta_winkel - v.gamma_winkel;
    v.alpha_rad = calc_rad_from_angle(v.alpha_winkel);
    v.beta_rad = calc_rad_from_angle(v.beta_winkel);
    v.gamma_rad = calc_rad_from_angle(v.gamma_winkel);
  }
}


//// SSW - SATZ ////
export function ssw_Seite_berechnen(v) {
  console.debug('ssw_Seite_berechnen');
  console.log(v.alpha_winkel);
  if (v.alpha_winkel && v.alpha_winkel != "") {
    v.alpha_rad = calc_rad_from_angle(v.alpha_winkel);
    v.a = seite_berechnen(v.b, v.c, v.alpha_rad);
  } else if (v.beta_winkel && v.beta_winkel != "") {
    v.beta_rad = calc_rad_from_angle(v.beta_winkel);
    v.b = seite_berechnen(v.a, v.c, v.beta_rad);
  } else if (v.gamma_winkel && v.gamma_winkel != "") {
    v.gamma_rad = calc_rad_from_angle(v.gamma_winkel);
    v.c = seite_berechnen(v.a, v.b, v.gamma_rad);
  }
}

export function umfang(v) {
  v.umfang = v.a + v.b + v.c;
}

export function flächeninhalt(v) {
  console.debug('flächeninhalt');
  if (v.a != "") {
    // v.flächeninhalt = v.a*Math.sin(v.beta_rad);
    // v.flächeninhalt = v.a * v.c *Math.sin(v.beta_rad);
    v.flächeninhalt = 1 / 2 * v.a * v.hoehe_A;
  } else if (v.b != "") {
    v.flächeninhalt = 1 / 2 * v.b * v.hoehe_B;
    // v.flächeninhalt = v.b*Math.sin(v.alpha_rad);
    // v.flächeninhalt = v.b*v.hoehe_B/2;
    // v.flächeninhalt = v.a * v.b * Math.sin(v.gamma_rad);
  } else if (v.c != "") {
    v.flächeninhalt = 1 / 2 * v.c * v.hoehe_C;
    // }else if(v.a!="" && v.b!=""){
    // v.flächeninhalt = v.a*Math.sin(v.beta_rad);
    // v.flächeninhalt = v.a*v.hoehe_C/2;
    // v.flächeninhalt = v.b * v.c * Math.sin(v.alpha_rad);
  }
}

export function seiten_höhe_C(v) {
  console.debug('seiten_höhe_C');
  v.hoehe_C = v.a * Math.sin(v.beta_rad);
  // if(v.a!=""){
  //   v.hoehe_C = v.a*Math.sin(v.beta_rad);
  // }else if(v.b!=""){
  //   v.hoehe_C = v.b*Math.sin(v.alpha_rad);
  // }else if(v.a!="" && v.b!=""){
  //   v.hoehe_C = v.a*Math.sin(v.beta_rad);
  // }
}
export function seiten_höhe_A(v) {
  console.debug('seiten_höhe_A');
  v.hoehe_A = v.b * Math.sin(v.gamma_rad);
}
export function seiten_höhe_B(v) {
  console.debug('seiten_höhe_B');
  v.hoehe_B = v.c * Math.sin(v.alpha_rad);
}

export function umkreisradius(v) {
  console.debug('umkreisradius');
  v.umkreisradius = v.a * v.b * v.c / (4 * v.flächeninhalt);
}

export function inkreisradius(v) {
  v.inkreisradius = 2 * v.flächeninhalt / v.umfang;
}

export function kathete(hypothenuse, kathete) {
  return Math.sqrt(Math.pow(hypothenuse, 2) - Math.pow(kathete, 2));
}


function seite_berechnen(seite1, seite2, rad) {
  return Math.sqrt(Math.pow(seite1, 2) + Math.pow(seite2, 2)
    - 2 * seite1 * seite2 * Math.cos(rad));
}

function winkel_berechnen_SSW(seite1, seite2, rad) {
  return Math.asin((Math.sin(rad) / seite1) * seite2);
}

function calc_rad_from_angle(winkel) {
  return winkel / 180 * Math.PI;
}

