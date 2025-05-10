if (process.argv.length !== 5) {
    console.log("Por favor, forneça exatamente 3 números como argumentos.");
    console.log("Exemplo: node maiorValor.js 10 25 7");
    process.exit(1);
}

const valor1 = parseFloat(process.argv[2]);
const valor2 = parseFloat(process.argv[3]);
const valor3 = parseFloat(process.argv[4]);

if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
    console.log("Por favor, forneça apenas números válidos como argumentos.");
    process.exit(1);
}

const maiorValor = Math.max(valor1, valor2, valor3);

console.log(`O maior valor entre ${valor1}, ${valor2} e ${valor3} é: ${maiorValor}`);