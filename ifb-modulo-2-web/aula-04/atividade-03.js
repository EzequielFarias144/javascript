const livro = {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    paginas: 96,
};

for (const propriedade in livro) {
    console.log(`${propriedade}: ${livro[propriedade]}`);
}