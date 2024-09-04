// QUESTION 5:

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, 2000));
}
function countdown(seconds) {
    return new Promise((resolve) => {
        function step(current) {
            if (current > 0) {
                console.log(current);
                wait(1000).then(() => step(current - 1));
            } else {
                console.log('Countdown completed!');
                resolve();
            }
        }
        step(seconds);
    });
}

countdown(5).then(() => {
    console.log("All done!");
});