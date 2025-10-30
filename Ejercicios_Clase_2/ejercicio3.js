let nombre = "Santiago";

let sociales = [3.4,5,4.2,2.8];
let matematicas= [4.3,4,4,3.9];
let ingles = [3,3,3,2];

let prom1 = (sociales.reduce((acumulador, valorActual) => acumulador + valorActual))/4;
let prom2 = (matematicas.reduce((acumulador, valorActual) => acumulador + valorActual))/4;
let prom3 = (ingles.reduce((acumulador, valorActual) => acumulador + valorActual))/4;

function notas() {
    console.log("tus notas en sociales fueron: "+sociales)
    console.log("tus notas en matematicas fueron: "+matematicas)
    console.log("tus notas en ingles fueron: "+ingles)
}

if (prom1 >= 3.5) {
    console.log("¡Felicidades "+nombre+", aprobaste sociales con un promedio de "+prom1+"!");
} else{
    console.log("¡Fracasaste "+nombre+"!, reprobaste sociales con un promedio de"+prom1);
}
if (prom2 >= 3.5) {
    console.log("¡Felicidades "+nombre+", aprobaste matematicas con un promedio de "+prom2+"!");
} else{
    console.log("¡Fracasaste "+nombre+"!, reprobaste matematicas con un promedio de"+prom2);
}
if (prom3 >= 3.5) {
    console.log("¡Felicidades "+nombre+", aprobaste ingles con un promedio de "+prom3+"!");
} else{
    console.log("¡Fracasaste "+nombre+"!, reprobaste ingles con un promedio de "+prom3);
}

console.log(notas())