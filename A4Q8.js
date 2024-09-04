// QUESTION 8:


function randomDelayMessage(message) {
    
    const randomDelay = Math.floor(Math.random() * 4000) + 1000;

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve(); 
        }, randomDelay);
    });
}


randomDelayMessage("This message is delayed randomly!").then(() => {
    console.log("Message has been logged after a random delay.");
});