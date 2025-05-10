let somaPares = 0;
let somaImpares = 0;
let qtdPares = 0;
let qtdImpares = 0;

console.log("Números de 1 a 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
    
    if (i % 2 === 0) {
        somaPares += i;
        qtdPares++;
    } else {
        somaImpares += i;
        qtdImpares++;
    }
}

const mediaPares = somaPares / qtdPares;
const mediaImpares = somaImpares / qtdImpares;

console.log("\n--- Números Pares ---");
console.log(`Soma dos pares: ${somaPares}`);
console.log(`Média dos pares: ${mediaPares.toFixed(2)}`);

console.log("\n--- Números Ímpares ---");
console.log(`Soma dos ímpares: ${somaImpares}`);
console.log(`Média dos ímpares: ${mediaImpares.toFixed(2)}`);