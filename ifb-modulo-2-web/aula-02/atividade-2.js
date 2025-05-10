const max = parseInt(process.argv[2]) || 10; 

if (isNaN(max) || max < 1) {
    console.log("Por favor, insira um número válido maior que 0.");
} else {
    for (let i = 1; i <= max; i++) {
        console.log(i);
    }
}