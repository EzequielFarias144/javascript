import { calcularFatorial } from './fatorial-web.mjs';

const numero = 5;
const resultado = calcularFatorial(numero);

console.log(`O fatorial de ${numero} é ${resultado}`);

document.addEventListener('DOMContentLoaded', () => {
    const outputDiv = document.createElement('div');
    outputDiv.textContent = `O fatorial de ${numero} é ${resultado}`;
    document.body.appendChild(outputDiv);
});