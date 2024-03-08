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

//busniss name generator 

// let button= document.querySelector("button");
// button.addEventListener("click" ,()=>{
//     let first , second , third;
// let random =Math.random(); // to generate random value between 0 to 1
// // first variable value
// if (random<0.33){
//     first =  "crazy";
// }
// else if(random>0.33 && random<0.66){
//     first = "amazing";
// }
// else{
//     first="fire";
// }

// random = Math.random();
// // second variable value
// if (random<0.33){
//     second =  "Engine";
// }
// else if(random>0.33 && random<0.66){
//     second = "food";
// }
// else{
//     second="garments";
// }

// random = Math.random();
// //third variable value
// if (random<0.33){ 
//     third =  "bros";
// }
// else if(random>0.33 && random<0.66){
//     third = "limited";
// }
// else{
//     third="hub";
// }
//     console.log(`${first} ${second} ${third}`);
// });


// factorial of num
//method one
// let num = Number(prompt("enter the number"));
// let fact =1;
// let factorial = (num) =>{
//     for(let i = 1; i<=num;i++){
//         fact*=i;
//     }
//     return fact ;
// }

// let ans = factorial(num);
// console.log(ans);

// dom manipulation questions

// let title = prompt("enter the title");
// let channelName = prompt("enter the channel name");
// let views =  Number(prompt("enter the views"));
// let time = prompt("enter the time");
// let thumbnail = prompt("enter the thumbnail");
// let duration = prompt("enter the duration of the video in 00:00 format");


// function ViewsFunction(views){
//     if(views<1000){
//         return views;
//     }
//     else if(views>1000&&views<1000000){
//      let newView= Math.round(views/=1000);
//         return`${newView}K`;
//     }
//     else if (views>=1000000){
//         let newView = Math.round(views/=1000000);
//         return `${newView}M`;
//     }
// }
// let ViewsCount = String(ViewsFunction(views));



// document.querySelector(".title").innerText= title;
// document.querySelector(".chennelname").innerText= channelName;
// document.querySelector(".views").innerText= `. ${ViewsCount}`;
// document.querySelector(".months").innerText= `. ${time} months old`;
// document.querySelector(".duration").innerText= duration;



//callback 

// function sum(a,b){
//     return a+b;
// } //1
// function callback(a,b,sum){
//     let x=sum(a,b);
//     console.log(x);
// }//2

// callback(3,4,sum);//3

//we dont use sum() during call back as seen in 3 .. in 2 we can write sum or sumCallback as parameters.. 


// CALL BACK HELL


// function greet(name, newName) {
//     setTimeout(() => {
//         console.log("hello", name);
//         newName();
//     }, 2000);
// }

// //setTimeout(); function is use to display any task after some time like in upper case we used 2000 == 2sec

// greet("keshav");
// // if we are passing string then we use ""

// // if we want to call different function one by one after 2 sec of break

// greet("keshav", () => {
//     greet("yash", () => {
//         greet("harsh");
//     })
// });

// this statement keep on expanding with complex function that create unreadable code that called callback hell

//PROMISES CONCEPTS

// resolve concepts
// function promise(){
//     setTimeout(()=>{
//         let newPromise = new Promise((resolve, reject) => { //promise syntax
//         console.log("newPromise");
//         resolve("success");     //pending to fulfiled
//          });
//          console.log(newPromise);

//     //if promise is resolve then what to do (to associate function with promise)
//     newPromise.then(()=>{
//         console.log("your promise have successs");
//     })



//     },2000)

// }

// promise(); // pending  state to the success (fulfiled state)

// //reject concept
// function rejectPromise(){
//     let newproimese = new Promise ((resolve,reject)=>{
//         console.log("reject promise");
//         reject("error while print");  //pending state to reject state (error)
//     })
//     console.log(newproimese);

//     // if promise is rejected then what to do (to associate function while promise is reject)

//     newproimese.catch(()=>{
//         console.log("oops");
//     });

// }
// rejectPromise();

//PROMISE CHAIN

// function promiseChain(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("hello", name);
//             resolve("success");
//         }, 4000)
//     })
// }
// //callback 
// promiseChain("keshav").then
//     ((res) => {
//         console.log("next 1");
//         promiseChain("rajat").then((res) => 
//         {
//             console.log("next 2");
//             promiseChain("raju").then((res) => 
//             {})
//         })

//     });


// ASYNC AWAIT

 function greet(name){
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
        console.log("hello",name);
        resolve("success");
       },2000) ;
    })
}
 
// async function greetlist(){
//     await greet("keshav"); //first this will run
//     await greet("ram");     // then thhis
//     await greet("raj");     // then
//     await greet("yash");    // then
//     await greet("harsh");   // then
//     await greet("kanika");  // then
// }

// greetlist();


// async awit second method of writing if you dont want to re declare this function
(async function greetlist(){
    await greet("keshav"); //first this will run
    await greet("ram");     // then thhis
    await greet("raj");     // then
    await greet("yash");    // then
    await greet("harsh");   // then
    await greet("kanika");  // then
})();