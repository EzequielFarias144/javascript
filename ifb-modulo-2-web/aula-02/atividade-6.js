let soma = 0;

console.log("Números de 1 a 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
    soma += i;
}

const media = soma / 10;

console.log(`\nSoma total: ${soma}`);
console.log(`Média total: ${media.toFixed(2)}`); 