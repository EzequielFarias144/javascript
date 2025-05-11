function exibirTabela(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        const linha = matriz[i];
        
        for (let j = 0; j < linha.length; j++) {
            // Escreve cada elemento seguido de tabulação
            process.stdout.write(linha[j]);
            
            // Adiciona tabulação exceto para o último elemento da linha
            if (j < linha.length - 1) {
                process.stdout.write("\t");
            }
        }
        
        // Quebra de linha após cada linha da matriz
        process.stdout.write("\n");
    }
}

// Exemplo de uso com o array do slide 15
const arrayBidimensional = [
    ["Fred", "Barney"],
    ["George", "Jane", "Elroy"],
    ["Homer", "Marge", "Bart"]
];

exibirTabela(arrayBidimensional);