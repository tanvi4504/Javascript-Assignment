function delayedLogSequence(messages) {
    let promise = Promise.resolve();

    messages.forEach(([message, delay]) => {
        promise = promise
            .then(() => wait(delay))  
            .then(() => console.log(message));  
    });

    // Return final promise chain
    return promise;
}


function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, 2000));
}


const messages = [
    ["Message 1", 1000],
    ["Message 2", 2000],
    ["Message 3", 1500]
];

delayedLogSequence(messages).then(() => {
    console.log("All messages logged in sequence!");
});