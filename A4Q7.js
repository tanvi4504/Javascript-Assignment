// QUESTION 7:


async function delayedLogSequence(messages) {
    for (const [message, delay] of messages) {
        await wait(delay);  
        console.log(message);  
    }
    console.log("All messages logged in sequence!");
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, 1500));
}


const messages = [
    ["Message 1", 1000],
    ["Message 2", 2000],
    ["Message 3", 1500]
];

delayedLogSequence(messages);