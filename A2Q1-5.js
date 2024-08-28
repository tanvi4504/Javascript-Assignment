// QUESTION 1: STRING CONCATENATON

let firstname = "surbhi";
let lastname = " Tailor";
let fullname = firstname.concat(lastname);
// console.log(fullname);



// QUESTION 2: IF-ELSE STATEMENT

var num=204;
if(num>0){
    console.log("POSITIVE");
}
 else if ((num<0)) {
    console.log("NEGATIVE");
} 
else{
    console.log("ZERO");
}



// QUESTION 3: LOOPS

let i;
for(i=1;i<=10;i++){
    console.log(i);
}



// QUESTION 4: FUNCTIONS
function greet(name){
    console.log("HELLO,",name);
}
greet("TANVI !"); 



// QUESTION 5: ARRAYS

let arr=[10,20,30,40,50];
let sum=arr.reduce((acc,curr)=>{
    return acc+curr;
});
console.log(sum);
