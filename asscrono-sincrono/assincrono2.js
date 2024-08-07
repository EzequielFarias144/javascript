asyncExample = () => {
    console.log("We're calculating the first 10,000 prime numbers.");
    console.log("Waiting");
    const arr = [2];
    let number = 3
    while (arr.length < 10000) {
        for(let i = 2; i < number; i++) {
            if (number % i === 0) {
                number++;
                break;
            }
            if (i === number - 1) {
                arr.push(number);
                number++;
                break;
            }
        }
    }
    return Promise.resolve(arr);
};
asyncExample().then(function(value) {
    console.log(`We calculated the first ${value.length} prime numbers`);
});
console.log("This line printes during calculation.");
