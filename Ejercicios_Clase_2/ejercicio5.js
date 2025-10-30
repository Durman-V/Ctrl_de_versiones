const prompt = require('prompt-sync')({ sigint: true });
while (true) {
    let numero = prompt("Ingrese un numero: ");

    if (numero == 0) {
        break;
    }

    if (numero % 2 == 0) {
        console.log("el numero " + numero + " es par")
    } else {
        console.log("el numero " + numero + " es impar")
    }
}
