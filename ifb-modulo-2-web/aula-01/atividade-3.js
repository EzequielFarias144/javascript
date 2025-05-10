const hamburguer = 9.95;
const milkshake = 8;
const refrigerante = 4.50;

let preço_total = (hamburguer * 2) + milkshake + refrigerante;

const preçoComTaxa = preço_total * 1.1; 


console.log(`Custo total antes da taxa: R$ ${preço_total.toFixed(2)}`);
console.log(`Custo total após a taxa de 10%: R$ ${preçoComTaxa.toFixed(2)}`);