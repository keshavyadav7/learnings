// day 10 of learning javascript

// questions 
// take a number input from a user and create a array for 1 to n 
// use reduce method to calculate sum of all numbers in the array.
// use the reduce method to calculate product of all numbera in the array.

// let num= prompt("enter the number");
// let numArr=[];
// for(let i=1; i<=num;i++){
//     numArr.push(i);
// }
// console.log(numArr);
// //sum
// let Sum = numArr.reduce((res,curr)=>{
//     return res+curr;

// });
// console.log("sum is ",Sum);
// //product
// let product= numArr.reduce((res,curr)=>{
//    return res*curr;
// });
// console.log("product is",product);


// dom basics

//  let h2=document.querySelector("h2");
//  console.dir(h2);  //access the html character
// document.querySelector("h2").innerText="keshav yadav";// changing the text of h2 


// div with unique value

let divs= document.querySelectorAll(".box");
console.dir(divs);
let i=1;
for(div of divs){
    div.innerText=`new value ${i}`;
    i++;
};