const linhas = 5;

for (let i = 1; i <= linhas; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write('*');
        if (j < i) {
            process.stdout.write(' ');
        }
    }
    console.log(); 
}