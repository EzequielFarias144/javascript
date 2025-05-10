const linhas = 5;

for (let i = linhas; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write('*');
        if (j < i) {
            process.stdout.write(' ');
        }
    }
    console.log(); 
}