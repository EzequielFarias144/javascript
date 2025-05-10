console.log("°F\t°C");
console.log("------------");

for (let fahrenheit = 5; fahrenheit <= 110; fahrenheit += 5) {
    const celsius = (5 / 9) * (fahrenheit - 32);
    console.log(`${fahrenheit}°F\t${celsius.toFixed(2)}°C`);
}