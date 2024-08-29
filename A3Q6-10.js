//  QUESTION 6:

let arr =[10,20,30,40,50,60];
let slicedarr = arr.slice(2,5);
console.log(slicedarr);
console.log(arr);



// QUESTION 7:

let arr1=[10,20,30,40,50,60];
let index=arr1.indexOf(40);
console.log(arr1);
console.log(index);


// QUESTION 8:

let arr2=[10,20,30,40,50]
arr2.map(()=>{});
let newarr = arr2.map((item , i)=>{

        return item * 10;
    })
    
    console.log(newarr);



// QUESTION 9:


let arr4=[10,20,30,40,50,60];

let filteredarr=arr4.filter(item=>item>20);
console.log(filteredarr);



//  QUESTION 10:


let arr5=[10,20,30,40,50];
let sum=arr5.reduce((acc,curr)=>{
    return acc+curr;
});
console.log(sum);