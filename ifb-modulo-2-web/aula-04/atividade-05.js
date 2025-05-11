function criaLivro(titulo, autor, paginas) {
    return {
        titulo: titulo,
        autor: autor,
        paginas: paginas
    };
}

function obterDescricao(livro) {
    return `${livro.titulo}, autor: ${livro.autor}, ${livro.paginas} páginas`;
}

const livro1 = criaLivro("Dom Casmurro", "Machado de Assis", 256);
const livro2 = criaLivro("1984", "George Orwell", 328);
const livro3 = criaLivro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 96);

console.log(obterDescricao(livro1));
console.log(obterDescricao(livro2));
console.log(obterDescricao(livro3));