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
var canva = document.getElementById('canvas-dreieck');
var ctx = canva.getContext('2d');

export function draw(v) {
    let blah = Math.sqrt(Math.pow(v.hoehe_C,2)+Math.pow(v.a,2));
    //// Koordinaten = [x,y];
    // let punkt_A = [0,0];
    // let punkt_B = [v.c,0];
    // let punkt_C = [blah,v.hc];

    let punkt_A_x = 150;
    let punkt_A_y = 150;
    let punkt_B_x = v.c;
    let punkt_B_y = 150;
    let punkt_C_x = blah;
    let punkt_C_y = v.hoehe_C;

    console.debug("Draw");
    console.log(v.c);
    console.log(v.hoehe_C);
    console.log(blah);


        ///////// SCALING /////////////////

    // let punkt_A_x = 150;
    // let punkt_A_y = 150;
    // let punkt_B_x = v.cscale;
    // let punkt_B_y = 150;
    // let punkt_C_x = v.blah_scale;
    // let punkt_C_y = v.hoehe_C_Scale;

    // if(v.c > canva.width){

    // }else if(v.c < canva.width){
        
    // }else if(v.a > canva.height){
        
    // }else if(v.a < canva.height){

    // }

    // console.log("canva.width=  "+canva.width);
    // console.log("v.c= "+v.c);
    // console.log("mix= "+(canva.width-v.c));
/////////////////////////////////////////////////


    // Eckpunkte berechnen lassen!
    // moveto 150, 150 ist die mitte des Canvas
    // man kann von 150 + die strecke (zb c) rechnen ... ende der strecke ist dann mein neuer Koordinaten-Punkt der ausgelesen gehört und von dem die nächste strecke weiter gehen wird/Soll!


    // Breite des Dreiecks definieren
        // für proportionales anpassen an Canvas

    // ctx.beginPath();
    // ctx.moveTo(150,150);
    // ctx.lineTo(120, 150);
    // ctx.lineTo(131,85);
    // ctx.closePath();
    // ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(punkt_A_x, punkt_A_y);
    ctx.lineTo(punkt_B_x, punkt_B_y);
    ctx.lineTo(punkt_C_x, punkt_C_y);
    ctx.closePath();
    ctx.stroke();
}

export function clearCanvas (){
    ctx.clearRect(0, 0, canva.width, canva.height);
    ctx.restore();
}