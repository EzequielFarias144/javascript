callbackFunc = () => {
    console.log("Executed last because we're using asynchronous code.");
};
setTimeout(callbackFunc, 1500);
console.log('Executede first');
console.log('Executede second');
