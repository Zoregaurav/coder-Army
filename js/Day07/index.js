//function

// function greeting(){
//     console.log("Hello Coder Army,strike is comming soon on 18 october");
//      return 20;
// }

// function addNumber(num1,num2){
//     const sum=num1+num2;
//     console.log(sum);
// }

// addNumber(3,4);
// console.log(greeting());


//rest operator:IMP->spread operator->IMP  ->function likhne ka tarikha 
// function addNumber(...num){
//     let sum=0;

//     for(let n of num){
//         sum+=n;
//     }

//     console.log(sum);
// }


// addNumber(7,8,9,10,11,12,23,45,67,76);

// const arr=[10,20,30,40,50];
// const arr2=[30,70,90,10];


// const [first,second,...num]=arr;//destructring

// console.log(first,second,num);

// // //spread operator:
//  console.log([...arr,...arr2]);


//function expression: ->function likhne ka dusra tarikha

// const addNumber=function(num1,num2){
//     return num1+num2;
// }
// console.log(addNumber(3,4));

//arrow function:



// const addNumber=(num1,num2)=>{
//     return num1+num2;
// }

// console.log(addNumber(2,3));

// const addNumber=(num1,num2)=>num1+num2;

// let arr=[10,11,12,13,14,4];
// arr.sort((a,b)=>a-b);

// console.log(arr);

//if we have single parameter,no need of this ()
// const sqaureNumber=num=>num*num;

// console.log(sqaureNumber);



// const greeting=()=>({name:"Rohit",age:20});

// console.log(greeting);

//IIFE:
//automatic function call:Imideate function invoked

// (function greeting(){
//      console.log("Hello Ji");
// })();

// ()()=>calling

// (()=>{
//     console.log("hi");
// })();

// function greet() {
//     console.log("Hello ji,kaise Ho");
// }

// function dance() {
//     console.log("i am dancing");
// }

// function meet(callback) {
//     console.log("I am going to meet Someone");
//     // dance();hardcode(Reusable)
//     callback();
//     console.log("i have finished meeting");

// }

// meet(greet);
// meet(dance);

// const arr=[10,11,23,12,45];
// arr.sort((arr)=>b-a);


