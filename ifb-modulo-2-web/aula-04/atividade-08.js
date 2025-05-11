function calcula(...numeros){
    if (numeros.length === 0) {
        return { soma: 0, media: 0 };
    }
    
    const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    
    const media = soma / numeros.length;
    
    return { soma, media };
}


console.log(calcula(4, 8, 20, 6)); 
console.log(calcula(10, 20, 30)); 
console.log(calcula(5)); 
console.log(calcula());