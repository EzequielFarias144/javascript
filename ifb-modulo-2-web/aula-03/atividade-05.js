function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function exibirTabelaTemperaturas() {
    console.log("Fahrenheit\tCelsius");
    console.log("-----------------------");
    
    for (let f = 50; f <= 150; f += 5) {
        const c = fahrenheitParaCelsius(f);
        console.log(`${f}\t\t${c.toFixed(2)}`);
    }
}

exibirTabelaTemperaturas();