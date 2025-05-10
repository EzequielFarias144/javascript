console.log("°F\t°C\t\tStatus"); 
console.log("----------------------");

for (let fahrenheit = 5; fahrenheit <= 110; fahrenheit += 5) {
    const celsius = (5 / 9) * (fahrenheit - 32);
    let status;
    
    if (celsius < 0) {
        status = "❄️ Abaixo de 0°C";
    } else if (celsius === 0) {
        status = "⚠️ Exatamente 0°C (Ponto de congelamento)";
    } else {
        status = "☀️ Acima de 0°C";
    }

    console.log(`${fahrenheit}°F\t${celsius.toFixed(2)}°C\t${status}`);
}