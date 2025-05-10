function fahrenheitParaCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}


if (process.argv.length < 3) {
    console.log("Por favor, forneça uma temperatura em Fahrenheit como argumento.");
    console.log("Exemplo: node conversor.js 77");
    process.exit(1);
}

const tempFahrenheit = parseFloat(process.argv[2]);

if (isNaN(tempFahrenheit)) {
    console.log("Por favor, forneça um número válido para a temperatura.");
    process.exit(1);
}

const tempCelsius = fahrenheitParaCelsius(tempFahrenheit);

console.log(`${tempFahrenheit} graus Fahrenheit equivalem a ${tempCelsius.toFixed(2)} graus Celsius.`);