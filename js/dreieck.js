/*
U = a + b + c
a = Seite a
b = Seite b
c = Seite c

1. rechtwinkliges Dreieck:
Rechtwinkliges Dreieck Formelsammlung Überblick

Flächeninhalt: A = a • b : 2    
oder A = c • hc : 2
Umfang: U = a + b + c             
Winkelsumme: α + β + γ = 180°
Umkreisradius: r = c : 2           
Inkreisradius: ρ = (a • b) : U

Pythagoras:
Hypotenuse c² = a² + b²        
Kathete a² = c² - b²          
Kathete b² = c² - a²
Höhensatz: h² = p * q        
Kathetensatz a: a² = c • p    
Kathetensatz b: b² = c • q

2. gleichschenkliges Dreieck:
Dreiecke Formelsammlung Überblick gleichschenkliges Dreieck

Flächeninhalt: A = a • ha : 2
oder A = c • hc: 2  
Umfang: U = 2 • a + c


Pythagoras:  
Hypotenuse a = √hc² + (c/2)²      
Kathete c/2 = √a² - hc²       
Kathete hc = √a² - (c/2)²

3. gleichschenklig-rechtwinkliges Dreieck:
gleichschenkliges-rechtwinkliges Dreieck Formelsammlung Überblick

Flächeninhalt: A = c • hc : 2  
oder Flächeninhalt: A = a² : 2  
oder Flächeninhalt: A = c² : 4
Umfang: U = 2 • a + c    
oder  Umfang: U = a • (2 + √2)
Basis c = a • √2
Höhe hc = c : 2  
oder Höhe hc = a • √2 : 2

4. gleichseitiges Dreieck:
Dreiecke Formelsammlung Überblick gleichseitiges Dreieck 

Flächeninhalt: A = a²/4 • √3         
Umfang: U = 3 •  a
Höhe: ha = a/2 • √3       
Inkreis = ha • 1/3         
Umkreis = ha • 2/3 

Pythagoras:   
a² = ha² + (a/2)²        

5. allgemeines Dreieck:
Dreiecke Formelsammlung Überblick Allgemeines Dreieck

Flächeninhalt: A = a • ha : 2      
oder A = b • hb : 2    
oder A = c • hc : 2

Umfang: U = a + b + c
Inkreisradius: ρ = 2 • A / U
Umkreisradius: r = a • b • c / 4 • A




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

let seite_a = document.querySelector("#s-a").value;
let seite_b = document.querySelector("#s-b").value;
let seite_c = document.querySelector("#s-c").value;

function draw() {
  var canva = document.getElementById('canvas-dreieck');
  var ctx = canva.getContext('2d');

  // Eckpunkte berechnen lassen!
  // moveto 150, 150 ist die mitte des Canvas
  // man kann von 150 + die strecke (zb c) rechnen ... ende der strecke ist dann mein neuer Koordinaten-Punkt der ausgelesen gehört und von dem die nächste strecke weiter gehen wird/Soll!
  ctx.beginPath();
  ctx.moveTo(150, 150);
  ctx.lineTo(190, 190);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(190, 190);
  ctx.lineTo(240, -240);
  ctx.stroke();
}


draw();
