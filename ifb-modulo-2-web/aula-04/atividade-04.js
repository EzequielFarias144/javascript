function obterDescricao(livro) {
    return `${livro.titulo}, autor: ${livro.autor}, ${livro.paginas} páginas`;
}

const livro1 = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    paginas: 256
};

const livro2 = {
    titulo: "1984",
    autor: "George Orwell",
    paginas: 328
};

console.log(obterDescricao(livro1));
console.log(obterDescricao(livro2));