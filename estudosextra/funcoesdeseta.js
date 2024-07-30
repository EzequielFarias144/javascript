const getPrice = (total) => /*<= funcao de seta*/ {
    const discount = 0.10
    return total - (discount * total);
};
console.log(getPrice(400));
