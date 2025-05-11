function exibirArrayDetalhado(arr) {
    console.log("=== Conteúdo do Array ===");
    
    console.log("\nElementos do array:");
    for (let i = 0; i < arr.length; i++) {
        console.log(`[${i}]: ${arr[i]}`);
    }
    
    console.log("\nPropriedades adicionais:");
    for (let prop in arr) {
        if (isNaN(parseInt(prop)) && arr.hasOwnProperty(prop)) {
            console.log(`${prop}: ${arr[prop]}`);
        }
    }
    
    console.log(`\nTamanho do array (length): ${arr.length}`);
}

let a = [10, 20, 30];
a.descricao = "Sequência de números";
a['autor'] = "Joana Silva";

exibirArrayDetalhado(a);