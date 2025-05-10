let fahrenheit = 5;
const maxFahrenheit = 110;
const incremento = 5;

console.log("°F\t°C"); 
console.log("------------"); 

while (fahrenheit <= maxFahrenheit) {
    const celsius = (5 / 9) * (fahrenheit - 32); 
    console.log(`${fahrenheit}°F\t${celsius.toFixed(2)}°C`); 
    fahrenheit += incremento;
}