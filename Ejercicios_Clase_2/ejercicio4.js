let pares = [];
let impares = [];

for (let i = 1; i <= 30; i++) {
    if (i % 2 == 0) {
        pares.push(i)
    } else{
        impares.push(i)
    }
    
}

console.log("los numeros pares son: "+pares);
console.log("los numeros impares son: "+impares);