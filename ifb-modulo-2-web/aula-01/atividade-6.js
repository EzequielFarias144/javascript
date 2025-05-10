const valor1 = parseFloat(process.argv[2]);
const valor2 = parseFloat(process.argv[3]);

if (isNaN(valor1) || isNaN(valor2)) {
    console.log("Por favor, insira dois números válidos.");
} else {
    const maior = Math.max(valor1, valor2);
    console.log(`O maior valor entre ${valor1} e ${valor2} é: ${maior}`);
}
