function ehPrimo(numero) {
    if (numero <= 1) return false;
    if (numero === 2) return true;
    if (numero % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("Números primos entre 2 e 30:");
for (let i = 2; i <= 30; i++) {
    if (ehPrimo(i)) {
        console.log(i);
    }
}