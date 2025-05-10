function obterDescricao(livro) {
    return `${livro.titulo}, autor: ${livro.autor}, ${livro.paginas} páginas`;
}

// Criando dois objetos livro diferentes
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

// Testando a função com os dois livros
console.log(obterDescricao(livro1));
console.log(obterDescricao(livro2));