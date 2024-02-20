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

// let divs= document.querySelectorAll(".box");
// console.dir(divs);
// let i=1;
// for(div of divs){
//     div.innerText=`new value ${i}`;
//     i++;
// };


// dom manipulation questions

// qs1. create a new button element. Give it a text "click me ", background color of red & text color of white .
// Insert the button as the first element inside the body tag.

// let newbutton = document.createElement("button");
// console.log(newbutton);
// newbutton.innerText="click me";
// newbutton.style.backgroundColor="red";
// newbutton.style.color="white";
// let bodytag = document.querySelector("body");
// bodytag.prepend(newbutton);

//ques2

// let para = document.querySelector("p");
// para.classList.add("content");  /// adding new class name

/* faulty calculator that do right task only 90% of time that means 10 % time this calculator will +==-,*==/ ,-==+ */

// //INPUT 1 num
// const num1 = Number(prompt("enter the first number"));
// // input 2 num
// const num2 = Number(prompt("enter second number"));
// // operation input
// const opr= prompt ("enter the operation");

// const a = Math.random();
// console.log(a);
// let ans=0;
// if (a>0.1){
//     if(opr=="+"){
        
//        ans = num1+num2;
//     }
//     else if (opr=="-"){
//          ans=num1-num2;
//     }
//     else if (opr=="*"){
//          ans= num1*num2;
//     }
//     else if (opr=="/"){
//          ans= num1/num2;
//     }
// }
// else{
//     if(opr=="+"){
//          ans= num1-num2;
//      }
//      else if (opr=="-"){
//           ans=num1*num2;
//      }
//      else if (opr=="*"){
//           ans= num1/num2;
//      }
//      else if (opr=="/"){
//           ans= num1*num2;
//      }
// }
// console.log("your answer for ",num1,opr,num2,"=",ans);