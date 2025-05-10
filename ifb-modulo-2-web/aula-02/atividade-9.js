const linhas = 5;
const colunas = 5;

for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
        process.stdout.write('*');
        if (j < colunas - 1) {
            process.stdout.write(' ');
        }
    }
    console.log();
}