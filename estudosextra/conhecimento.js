const nome = "Alice"; // constante, não muda
let idade = 25; // variável mutável

if (true) {
  let idade = 30; // escopo de bloco, diferente da variável acima
  console.log(idade); // 30
}

console.log(idade); // 25
