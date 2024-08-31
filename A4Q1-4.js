// QUESTION 1:

function delayedMessage(){
    setTimeout(()=>{
        console.log("Hello, Tanvi!");
    },4000);
}
delayedMessage();



// QUESTION 2:

function countdown(n){
let interval = setInterval(()=>{
        console.log(n--);
        if (n<0) {
            document.getElementById("stopint").addEventListener("click",function () {
                console.log("stop button clicked");
                clearInterval(interval);
            })
        
        }
    },1000);
}
countdown(5);

// QUESTION 3:

function countdown(n){
    let interval = setInterval(()=>{
            console.log(n--);
            if (n<0) {
                function callback(){
                    clearInterval(interval);
                    console.log("countdown stopped");
                }
                callback();
                
            
            }
        },1000);
    }
    countdown(5);

// QUESTION 4:

function wait(n){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let message = { 
                name : "Tanvi"
            };
            return resolve(message);
        
        }, n);
    })
}
let wait1 = wait(5000);
console.log(wait1);