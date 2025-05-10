const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    paginas: 1178
};

for (const propriedade in livro) {
    console.log(`${propriedade}: ${livro[propriedade]}`);
}