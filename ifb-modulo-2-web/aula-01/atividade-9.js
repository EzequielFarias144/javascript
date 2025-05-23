if (process.argv.length < 3) {
    console.log("Por favor, forneça um número de 1 a 7 como argumento.");
    console.log("Exemplo: node diasSemana.js 3");
    process.exit(1);
}

const dia = parseInt(process.argv[2]);
let diaSemana;

switch (dia) {
    case 1:
        diaSemana = "Domingo";
        break;
    case 2:
        diaSemana = "Segunda-feira";
        break;
    case 3:
        diaSemana = "Terça-feira";
        break;
    case 4:
        diaSemana = "Quarta-feira";
        break;
    case 5:
        diaSemana = "Quinta-feira";
        break;
    case 6:
        diaSemana = "Sexta-feira";
        break;
    case 7:
        diaSemana = "Sábado";
        break;
    default:
        diaSemana = "Número inválido. Por favor, digite um valor entre 1 e 7.";
}

console.log(diaSemana);