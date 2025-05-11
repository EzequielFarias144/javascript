function calcula(...numeros){
    if (numeros.length === 0) {
        return { soma: 0, media: 0 };
    }
    
    const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    
    const media = soma / numeros.length;
    
    return { soma, media };
}


console.log(calcula(4, 8, 20, 6));    // { soma: 38, media: 9.5 }
console.log(calcula(10, 20, 30));      // { soma: 60, media: 20 }
console.log(calcula(5));               // { soma: 5, media: 5 }
console.log(calcula());                // { soma: 0, media: 0 }