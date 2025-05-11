function exibirTabela(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        const linha = matriz[i];
        
        for (let j = 0; j < linha.length; j++) {
            process.stdout.write(linha[j]);
            
            if (j < linha.length - 1) {
                process.stdout.write("\t");
            }
        }
        
        process.stdout.write("\n");
    }
}

const arrayBidimensional = [
    ["Fred", "Barney"],
    ["George", "Jane", "Elroy"],
    ["Homer", "Marge", "Bart"]
];

exibirTabela(arrayBidimensional);