// This keywords

//this call apply bind
//this :class object method
//strict mode vs non strict mode

// 'use strict'
//global object:In window it is called window,in node js,it is called global.
//globalThis points to global object of the enviornment



// var a=10;
//  b=23;

// console.log(this);
// function greet(name1,name2){
//     console.log(name1,name2);
// }

// console.log(greet("rohit","mohit")); 
// document.getElementById("first");


// document.getElementById("first");
// console.log(global);

// console.log(globalThis);



//Learn about this keyword:
//this keyword in global scope:NodeJs(Empty Object),in browser it will point to global object->window 
// 'use Strict'
// console.log(this);


 
//function:
//100 user :greet function:100*memory,code copy paste

const user={
    name:"Rohit",
    age:30,
    greet:function(){
        // console.log(`Hi ${this.name}`);
        console.log(this.name);
    }
}

user.greet();

const user2={
    name:"mohit"
}

user2.greet=user.greet;
this==user
user2.greet();



//normal function :without strict mode,this will point to global object
// 'non strict'->this global object ko point karega 
// function greet(){
//     console.log(this);
// }
// greet();

//in strict mode:it will point to undefined
// 'use strict'->this undefined ayega no calling
// function greet(){
//     console.log(this);
// }
// greet();




// function:better approach

// function greet(){
//     console.log(`hi ${this.name}`);
// }

// function incrementAge(value,name){
//     this.age+=value;
//     this.name=name;
//     console.log(this.age);
//     console.log(this.name);
// }

// const user={
//     name:"Rohit",
//     age:30,
// }
 
// const user2={
//     name:"Mohit",
//     age:10
// }

// const user=greet();

 //call,apply,bind ,this point to the invoking object
// incrementAge.call(user2,10,"Mohan");
// incrementAge.apply(user2,[10,"mohan"]);
// const incr=incrementAge.bind(user2,10,"mohan");
// console.log(incr);
 
// incr();
// greet.call(user);
// greet.call(user2);



//classes:
//in class contrcuctor, this will point to newly create empty object
// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }

// //this ={name:"Rohit",age:20}

// const p1=new person("Rohit",20);
// console.log(p1);


//Arrow function:this doesn't exist for arrow function ,lexical enviornment scope:
//arraow function take this keyword from it's lexical scope:


//use strcit and strict form it aloso behave the same:
// console.log(this);  //->this point to empty object

// const greet=()=>{
//     console.log(this);
// }
// greet();


// 'use strict'
// const user={
//     name:"Rohit",
//     greet:function(){
//        //console.log(this) 
//        const that=this;
//         function meet(){
//             console.log(that);
//         }
//         meet();
//     }
// }
// user.greet();

// const stopWatch={
//     second:0,
//     start:function(){
//         setInterval((function(){
//             const that=this;
//             // console.log(this);
//             that.second++
//             console.log(that.second);c 
//         },1000))
//     }
// }

// stopWatch.start();
 
//better approch:callback function

// const stopWatch={
//     second:0,
//     start:function(){
//         console.log(this);
//         setInterval(()=>{
//             this.second++;
//             console.log(this.second);
//         },1000)
//     }
// }; 
// stopWatch.start();

// 'use strict'->same empty and strict->empty

// console.log(this);

// const user={
//     name:"ROhit",
//     greet:()=>{
//         console.log(this);
//     }
// }

// user.greet();

// const button=document.getElementById("first");

//this->button ko pint karega
// button.addEventListener('click',function(){
//     console.log(this);
// })


//this->window
// button.addEventListener('click',()=>{
//     console.log(this);
// })



//final summary:
//this keyward:Global scope in Node js:{}
//window->window object

// function:this keyward,if someone invoke the method or function,this will poiny to that 
//normal function:when no one is invoking it,
//Non-strict:Global object for node and browser
//strict mode:undefined 

//arrow funtion:it takes this from it's lexical enviornment scope:

// 'use strict'
// function greet(){
//     console.log(this)
// }

// greet();

