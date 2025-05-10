function calcularAreaCirculo(raio) {
    if (raio < 0) {
        return 0;
    }
    return Math.PI * Math.pow(raio, 2);
}

console.log("Área com raio 5:", calcularAreaCirculo(5).toFixed(2));
console.log("Área com raio 0:", calcularAreaCirculo(0));     
console.log("Área com raio -3:", calcularAreaCirculo(-3));    
console.log("Área com raio 10:", calcularAreaCirculo(10).toFixed(2));